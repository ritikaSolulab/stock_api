const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require('./routes/routes');

dotenv.config();

//mongo db connection
mongoose
 .connect(process.env.MONGODB_URI)
 .then(()=>console.log("DBConnection Successfull!"))
 .catch((err) => {
    console.log(err);
});

app.use(cors());
app.use(express.json());

//router 
app.use("/routes", router);

app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running!");
});



