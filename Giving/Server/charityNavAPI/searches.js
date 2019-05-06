const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const colors = require("colors");
const fetch = require("node-fetch");

const { charityNavApiUrl, charityNavApiId, charityNavApiKey } = require("../config");
const apiKeyAndIdUrl = "?app_id=" + charityNavApiId + "&app_key=" + charityNavApiKey;
const apiUrl = charityNavApiUrl + "/Organizations" + apiKeyAndIdUrl;

/*
 *  BASIC KEYWORD SEARCH
 */
router.get("/:input", (req, res) => {
  console.log("-GET REQUEST RECEIEVED FROM SEARCH SCREEN".bold.blue);

  let searchInput = req.params.input;
  console.log("SEARCHING FOR: " + searchInput.bold.green);
  searchInput = encodeURI(searchInput);

  let searchUrl = apiUrl + "&search=" + searchInput;
  console.log("making request to: " + searchUrl.green);

  searchCharityNavigatorAPI(searchUrl, res);
});

/*
 *  SEARCH BY CAUSE
 */
router.get("/byCause/:causeID", (req, res) => {
  console.log(
    "-GET REQUEST RECEIEVED FROM SEARCH SCREEN CAUSE BUTTON".bold.blue
  );

  const causeID = req.params.causeID;
  const searchUrl = apiUrl + "&causeID=" + causeID;
  console.log("making request to: " + searchUrl.green);

  searchCharityNavigatorAPI(searchUrl, res);
});

/*
 *  FILTERED SEARCH
 */
router.post("/filtered", (req, res) => {
  console.log("-POST REQUEST RECEIEVED".bold.blue);
  console.log("Search Filters: ");
  console.log(req.body);

  let searchUrl = apiUrl;

  if (req.body.pageSize != null) {
    searchUrl += "&pageSize=" + req.body.pageSize;
  }
  if (req.body.keyword != "" && req.body.keyword != null) {
    searchUrl += "&search=" + encodeURI(req.body.keyword);
  }
  if (req.body.ratedOnly == true) {
    searchUrl += "&rated=TRUE";
  }
  if (req.body.category != null) {
    searchUrl += "&categoryID=" + req.body.category;
  }
  if (req.body.state != null) {
    searchUrl += "&state=" + req.body.state;
  }
  if (req.body.city != null) {
    searchUrl += "&city=" + encodeURI(req.body.city);
  }
  if (req.body.zip != null) {
    searchUrl += "&zip=" + encodeURI(req.body.zip);
  }
  if (req.body.minRating != null && req.body.minRating != 0) {
    searchUrl += "&minRating=" + req.body.minRating;
  }
  if (req.body.scope != null) {
    searchUrl += "&scopeOfWork=" + req.body.scope;
  }
  if (req.body.noGovSupport == true) {
    searchUrl += "&noGovSupport=TRUE";
  }

  searchCharityNavigatorAPI(searchUrl, res);
});

async function searchCharityNavigatorAPI(searchUrl, res) {
  try {
    const response = await fetch(searchUrl);
    const data = await response.json();
    console.log(data);

    let myJSON;
    if (data.errorMessage) {
      console.log("SEARCH RETURNED NO RESULTS:");
      myJSON = { data: null };
    } else {
      console.log("SUCCESS: search returned the following data:");
      console.log("____________________________________________");
      myJSON = { data: data };
    }
    console.log(data);
    res.send(myJSON);
  } catch (err) {
    console.log(err);
  }
}

console.log("Search Routes Listening...");
module.exports = router;
