const mysql = require("mysql");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
});

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).render("admin/login", {
        message: "Please provide an email and password",
        layout: 'landingPage',
      });
    }

    db.query(
      "SELECT * FROM tbl_user WHERE email = ?",
      [email],
      async (error, results) => {
        console.log(results);
        
        if (
          !results ||
          !(await bcrypt.compare(password, results[0].password))
        ) {
          res.status(401).render("admin/login", {
            message: "Email or Password is Incorrecct",
            layout: 'landingPage',
          });
        } else {
          const id = results[0].user_id;

          const token = jwt.sign({ id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES_IN,
          });

          console.log("The token is: " + token);

          const cookieOptions = {
            expires: new Date(
              Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          };

          res.cookie("jwt", token, cookieOptions);
          res.status(200).redirect("/feed");          
        }
      }
    );
  } catch (error) {
    console.log(error);
  }
};

exports.register = (req, res) => {
  console.log(req.body);

  const { surname, firstname, email, password, passwordConfirm } = req.body;

  if (!surname || !firstname || !email || !password) {
    return res.status(400).render("admin/register", {
      message: "Please provide name, email and password",
      layout: 'landingPage',
    });
  }

  if ( !passwordConfirm) {
    return res.status(400).render("admin/register", {
      message: "Please re-fill form and comfirm password",
      layout: 'landingPage',
    });
  }

  db.query(
    "SELECT email FROM tbl_user WHERE email = ?",
    [email],
    async (error, results) => {
      if (error) {
        console.log(error);
      }
      if (results.length > 0) {
        return res.render("admin/register", {
          message: "That email is already in use",
          layout: 'landingPage',
        });
      } else if (password !== passwordConfirm) {
        return res.render("admin/register", {
          message: "Passwords do not match",
          layout: 'landingPage',
        });
      }

      let hashedPassword = await bcrypt.hash(password, 8);
      console.log(hashedPassword);

      db.query(
        "INSERT INTO tbl_user SET ?",
        { surname: surname, firstname: firstname, email: email, password: hashedPassword },
        (error, results) => {
          if (error) {
            console.log(error);
          } else {
            console.log(results);
            return res.render("admin/register", {
              message: "User registered",
              layout: 'landingPage',
            });
          }
        }
      );
    }
  );
};
