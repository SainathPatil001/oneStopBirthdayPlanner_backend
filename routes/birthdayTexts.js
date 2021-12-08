const express = require("express");

const router = express.Router();
const btext = require("../models/birthdayTexts");

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
