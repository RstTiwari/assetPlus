const express = require("express");
var mongoose = require("mongoose");
const dotenv = require("dotenv");
const cloudinary = require("cloudinary").v2;
const app = express();
const port = 8000;
const cors = require("cors");
dotenv.config();

mongoose.connect("mongodb://localhost:27017/assignment");
/**
 * Lets Conncet to Cloudinary with this Datas
 */
cloudinary.config({
    cloud_name: process.env.cloudinaryName,
    api_key: process.env.apiKey,
    api_secret: process.env.apiSecret,
});

app.use(cors());
app.use(express.json());

app.use(require("./routes"));

app.listen(port, () => {
    console.log(`Listening on port: ${port}`);
});

process.on("SIGINT", async function () {
    await mongoose.disconnect();
    process.exit(0);
});
