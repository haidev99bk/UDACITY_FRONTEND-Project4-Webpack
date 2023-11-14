var path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
require("dotenv").config();
const app = express();
// API
const baseURL = "https://api.meaningcloud.com/sentiment-2.1?";
const apiKey = process.env.API_KEY;

app.use(express.static("dist"));

console.log(__dirname);
dd;

app.get("/", function (req, res) {
  res.sendFile("dist/index.html");
});

app.post("/api", async function (req, res) {
  userInput = req.body.url;
  console.log(`You entered: ${userInput}`);
  const apiURL = `${baseURL}key=${apiKey}&url=${userInput}&lang=en`;

  const response = await fetch(apiURL);
  const mcData = await response.json();
  console.log("mcData : ", mcData);
  res.send(mcData);
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
app.listen(8080, function () {
  console.log("Example app listening on port 8080!");
});

app.get("/test", function (req, res) {
  res.send(mockAPIResponse);
});
