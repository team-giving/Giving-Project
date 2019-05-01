const mongoose = require('./db/mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const colors = require("colors");
const request = require("request");



const private = require('./routes/private')
const userRoutes = require('./routes/user-routes');

// const bcrypt = require('bcrypt');
// let password = 'myPassword';
// let salt = bcrypt.genSaltSync(12);
// let hashedPassword = bcrypt.hashSync(password, salt);
// console.log("My hashedPassword is equal to", hashedPassword);
// let compare = bcrypt.compareSync(password, hashedPassword);
// console.log(`Comparing passwords: ${compare}`);


//*************************** API Calls ************************************
const apiKey = "7bb960e0700738ed6943b6861092b51c";
const apiId = "af34f9bb";
const apiUrl =
  "https://api.data.charitynavigator.org/v2/Organizations" +
  "?app_id=" + apiId + "&app_key=" + apiKey;

/*
 *  BASIC KEYWORD SEARCH
 */
app.get("/search/:input", (req, res) => {
  console.log("-FETCH REQUEST RECEIEVED FROM SEARCH SCREEN".bold.blue);

  let searchInput = req.params.input;
  console.log("SEARCHING FOR: " + searchInput.bold.green);
  searchInput = encodeURI(searchInput);

  let searchUrl = apiUrl + "&search=" + searchInput;
  console.log("making request to: " + searchUrl.green);

  searchCharityNavigatorAPI(searchUrl, res, false);
});

/*
 *  FILTERED SEARCH
 */
app.post("/filteredSearch", (req, res) => {
  console.log("-POST REQUEST RECEIEVED".bold.blue);
  console.log("Search Filters: ");
  console.log(req.body);

  let searchUrl = apiUrl;
  let searchByEIN = false;

  if (req.body.ein != null) {
    searchUrl =
      "https://api.data.charitynavigator.org/v2/Organizations/" + req.body.ein + "?app_id=" + apiId + "&app_key=" + apiKey;
      searchByEIN = true;
  } else {
    if (req.body.pageSize != null) {
      searchUrl += "&pageSize=" + req.body.pageSize;
    }
    if (req.body.keyword != null) {
      searchUrl += "&search=" + encodeURI(req.body.keyword);
    }
    if (req.body.ratedOnly == true) {
      searchUrl += "&rated=TRUE";
    }
    if (req.body.category != null) {
      searchUrl += "&categoryID=" + req.body.category;
    }
    if (req.body.minRating != null) {
      searchUrl += "&minRating=" + req.body.minRating;
    }
    if (req.body.scope != null) {
      searchUrl += "&scopeOfWork=" + req.body.scope;
    }
    if (req.body.noGovSupport == true) {
      searchUrl += "&noGovSupport=TRUE";
    }
  }

  console.log("API URL: ".bold.green);
  console.log(searchUrl.bold.green);

  searchCharityNavigatorAPI(searchUrl, res, searchByEIN);
});

//************************* Helper Functions ********************************
function searchCharityNavigatorAPI(searchUrl, res, searchByEIN){
    request(searchUrl, { json: true }, (err, response, data) => {
      let myJSON;
      if (err) {
        console.log("ERROR: search failed");
        return console.log(err);
      } else if (data.errorMessage) {
        console.log("SEARCH RETURNED NO RESULTS:");
        myJSON = { data: null };
      } else {
        console.log("SUCCESS: search returned the following data:");
        console.log("____________________________________________");
        if (searchByEIN){
            myJSON = { data: [data] };
        }else{
            myJSON = { data: data };
        }
      }
      console.log(data);
      res.send(myJSON);
    });
}



app.get('/', (req, res) => {
    res.send('Welcome');
});

app.use('/user', userRoutes);
app.use('/private', private);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started listening on port: ${PORT}`);
});
