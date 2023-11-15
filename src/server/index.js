var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
require("dotenv").config();
const app = express();
const bodyParser = require("body-parser");
const fetch = require("node-fetch");

// API
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
const apiKey = process.env.API_KEY;
const cors = require("cors");

app.use(cors());
app.use(express.static("dist"));
app.use(bodyParser.json());

console.log(__dirname);

app.get("/", function (req, res) {
  res.sendFile(path.resolve(__dirname, "dist/index.html"));
});

app.post("/api", async function (req, res) {
  console.log("req", req.body);
  userInput = req.body.url;
  console.log(`You entered: ${userInput}`);
  const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`;

  const response = await fetch(apiURL);
  const mcData = await response.json();
  console.log("mcData : ", mcData);
  res.json(mcData);
  /** server sends only specified data to the client with below codes
   * const projectData = {
   *  score_tag : mcData.score_tag,
   *  agreement : mcData.agreement,
   *  subjectivity : mcData.subjectivity,
   *  confidence : mcData.confidence,
   *  irony : mcData.irony
   * }
   * res.send(projectData);
   * */
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log("The app listening on port 8081!");
});

app.get("/test", function (req, res) {
  console.log("run here");
  res.send(mockAPIResponse);
});
