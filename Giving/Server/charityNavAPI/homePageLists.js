const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

const colors = require("colors");
const fetch = require("node-fetch");

const { charityNavApiUrl, charityNavApiId, charityNavApiKey } = require("../config");
const apiKeyAndIdUrl = "?app_id=" + charityNavApiId + "&app_key=" + charityNavApiKey;

let homePageListData = [];

// TODO: Add a timeout to this function call so that the home page lists get updated daily
getAndSortCharityNavigatorLists(homePageListData);

router.get("/lists", (req, res) => {
  console.log("-FETCH REQUEST RECEIEVED FROM HOME SCREEN".bold.blue);
  console.log("Sending Home Page List Data: ");
  console.log(homePageListData);
  res.send({ data: homePageListData });
});

async function getAndSortCharityNavigatorLists(homePageListData) {
  console.log("Retrieving Home Page List Data...");
  const apiUrl_lists = charityNavApiUrl + "/Lists";

  try {
    //Fetch List Data from Charity Navigator and Pick 10 Random Lists
    const response = await fetch(apiUrl_lists + apiKeyAndIdUrl);
    const data = await response.json();
    let randomListIDs = getRandomListIDs(data);

    //Fetch charity data for each list
    for (let i = 0; i < randomListIDs.length; i++) {
      try {
        let listId = randomListIDs[i];
        let resp = await fetch(apiUrl_lists + "/" + listId + apiKeyAndIdUrl);
        let list_data = await resp.json();
        homePageListData[i] = list_data;
      } catch (err) {
        console.log(err);
      }
    }
    console.log("Home Page List Data Retrieved and Stored!");
  } catch (error) {
    console.log(error);
  }
}

function getRandomListIDs(data) {
  let randomListIDs = [];
  while (randomListIDs.length < 10) {
    let list = data[Math.floor(Math.random() * data.length)];
    if (list.isCurrentlyFeatured && !randomListIDs.includes(list.listID)) {
      if (list.listType === "Top List" || list.listType === "Hot Topics") {
        randomListIDs.push(list.listID);
      }
    }
  }
  return randomListIDs;
}

console.log("Home Page Routes Listening...");
module.exports = router;
