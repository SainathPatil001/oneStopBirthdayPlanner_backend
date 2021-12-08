const btext = require("../models/birthdayTexts");

exports.getAllBirthdayTexts = async (req, res, next) => {
  const texts = await btext.find();
  console.log(texts.length);
  res.json({ texts });

  next();
};

exports.getbtextAccordingToCategory = async (req, res, next) => {
  const texts = await btext.find({ category: req.params["category"] });

  res.json({ texts });

  next();
};
