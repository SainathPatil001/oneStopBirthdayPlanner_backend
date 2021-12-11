const express = require("express");
const path=require("path")
const router = express.Router();
const btext = require(path.join("..","models","birthdayTexts"));

const {
  getAllBirthdayTexts,
  getbtextAccordingToCategory,
} = require("../controllers/birthdayTexts");

router.get("/getAllBirthdayTexts", getAllBirthdayTexts);

router.get(
  "/getbtextAccordingToCategory/:category",
  getbtextAccordingToCategory
);

module.exports = router;
