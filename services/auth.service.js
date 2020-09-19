const jwt = require("jsonwebtoken");

exports.authenticateToken = (req, res, next) => {
  // Gather the jwt access token from the request header
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err);
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

exports.generateAccessToken = (email) => {
  return jwt.sign(email, process.env.TOKEN_SECRET, { expiresIn: "1800s" });
};
