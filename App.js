const express = require("express");
const app = express();
const birthdayTextRoutes = require("./routes/birthdayTexts");
const mongoose = require("mongoose");
const btext = require("./models/birthdayTexts");

mongoose.connect(
  "mongodb://localhost/oneStopBirthdayPlanner",
  () => {
    // const text=new btext({
    //     text:"“Happy birthday! Here’s to more life, love, and adventures with you to come!”",
    //     category:"short"
    // })
    // text.save()

    // btext.deleteMany({
    //     text:"“Happy birthday! Here’s to more life, love, and adventures with you to come!”"
    // })

    // btext.findByIdAndDelete("61b0c60ae54c07a17601a65e",()=>{
    //     console.log("successfully deleted");
    // })
    console.log("DB connected");
  },
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.get("/", (req, res) => {
  res.send("hello");
});

app.use("/birthdayTexts", birthdayTextRoutes);

app.listen(8000, () => {
  console.log("server started");
});
