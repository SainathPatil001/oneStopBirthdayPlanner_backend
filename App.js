const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path=require("path")
var cors = require('cors')

app.use(cors())


const birthdayTextRoutes = require(path.join(__dirname ,"routes","birthdayTexts"));
const btext = require(path.join(__dirname ,"models","birthdayTexts"));

mongoose.connect(
  "mongodb+srv://<saipatil1>:<saipatil>@cluster0.86lnj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
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
const port =process.env.PORT||8000
app.listen(port, () => {
  console.log("server started");
});
