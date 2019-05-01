//************************** Import/Setup Modules *****************************
const express = require("express");
const app = express();
const colors = require("colors");
const request = require("request");
//const path = require('path');
//app.use(express.static('public'));
const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//const cors = require("cors");
//app.use(cors({ origin: true }));

const http = require("http");
const server = http.createServer(app);
//const io = require("socket.io").listen(server);

//*************************** API Calls ************************************
app.get("/test", (req, res) => {
  console.log("-TEST REQUEST RECEIEVED".bold.blue);

  const pageSize = 10;
  const key = 7bb960e0700738ed6943b6861092b51c;
  const url =
    "https://api.data.charitynavigator.org/v2/Organizations?app_id=af34f9bb&app_key=" + key + "&pageSize=" + pageSize + "&state=RI";

  request(url, { json: true }, (err, response, data) => {
    if (err) {
      return console.log(err);
    }
    let charities = []
    data.map(charity =>
        charities.push(charity.charityName)
    );
    let myJSON = {charities: charities};
    console.log(charities);
    res.send(myJSON)
    //console.log(data.url);
    //console.log(data.explanation);
  });
});

//************************* Start Server Listening ****************************
server.listen(8080, function() {
  console.log("- Express Server listening on port 8080".bgCyan);
});
