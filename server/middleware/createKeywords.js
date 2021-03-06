const encryptPassword = (password) => {
  const saltRounds = process.env.SALT;
  return bcrypt.hashSync(password, +saltRounds);
};

module.exports = (req, res, next) => {
  // Check if keywords contains at least a letter
  const regExp = /[a-zA-Z]+/;
  if (regExp.test(req.body.keywords)) {
    // Creating list of lowercase words
    const keywordsList = req.body.keywords
      .split(" ")
      .filter((word) => {
        return word.length > 1 && /[A-Za-z0-9]+/.test(word);
      })
      .map((word) => {
        return word.toLowerCase();
      });

    if (keywordsList.length === 0) return res.status(400).send({ error: "Invalid keywords" });

    req.body.keywords = keywordsList.join("|");
  }
  // else {
  //   return res.status(400).send({ error: "Invalid keywords" });
  // }

  next();
};
