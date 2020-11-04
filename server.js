
// include modules
const bodyParser = require("body-parser");
const sql = require("sqlite3").verbose();
const multer = require('multer');
const fs = require("fs");
const FormData = require("form-data");

const express = require("express");
const app = express();

// our default array of dreams
const dreams = [
  "Find and count some sheep",
  "Climb a really tall mountain",
  "Wash the dishes"
];

// make all the files in 'public' available
// https://expressjs.com/en/starter/static-files.html
app.use(express.static("public"));

// https://expressjs.com/en/starter/basic-routing.html
app.get("/", (request, response) => {
  response.sendFile(__dirname + "/views/login.html");
});

app.get("/new-user-faq", (request, response) => {
  response.sendFile(__dirname + "/views/faq.html");
});

app.get("/new-account", (request, response) => {
  response.sendFile(__dirname + "/views/new-account.html");
});

app.get("/chatroom_lt456-32pwA", (request, response) => {
  response.sendFile(__dirname + "/views/index1.html");
});

app.get("/chatroom_lt456-32pwB", (request, response) => {
  response.sendFile(__dirname + "/views/index2.html");
});

app.get("/instructions", (request, response) => {
  response.sendFile(__dirname + "/views/instructions.html");
});

app.get("/consent-form", (request, response) => {
  response.sendFile(__dirname + "/views/consent.html");
});

app.get("/resultsPage", (request, response) => {
  response.sendFile(__dirname + "/views/endPage.html");
});

// send the default array of dreams to the webpage
app.get("/dreams", (request, response) => {
  // express helps us take JS objects and send them as JSON
  response.json(dreams);
});

// listen for requests :)
const listener = app.listen(process.env.PORT, () => {
  console.log("Your app is listening on port " + listener.address().port);
});



//======================== BUILDING DATABASE ===============================
// This creates an interface to the file if it already exists, and makes the 
// file if it does not. 
const responseDB = new sql.Database("participantResponse.db"); //sql or slqite3?

// Actual table creation; only runs if "participantResponse.db" is not found or empty
// Does the database table exist?
let cmd = " SELECT name FROM sqlite_master WHERE type='table' AND name='responseDB' ";
responseDB.get(cmd, function (err, val) {
    console.log(err, val);
    if (val == undefined) {
        console.log("No database file - creating one");
        createResponseDB();
    } else {
        console.log("Database file found");
    }
});

function createResponseDB() {
  // explicitly declaring the rowIdNum protects rowids from changing if the 
  // table is compacted; not an issue here, but good practice
  //++++++TODO: Change to "id TEXT PRIMARY KEY UNIQUE" when study is up and running
  const cmd = 'CREATE TABLE responseDB ( id TEXT, counterBalance TEXT, condition TEXT, here TEXT, attention TEXT, juryHand TEXT, jury TEXT, heard_case TEXT, biased TEXT)';
  responseDB.run(cmd, function(err, val) {
    if (err) {
      console.log("Database creation failure",err.message);
    } else {
      console.log("Created database");
    }
    
  });
}

// //======================== INSERT INTO DATABASE ===============================
// // Handle a post request containing JSON, storing it in DB
app.use(bodyParser.json());
// gets JSON data into req.body
app.post('/saveData', function (req, res, next) {
  console.log(req.body);
  //get data out of body
  // Responses: add survey and if they raised hand
  let counterBalance = req.body.counterBalance;
  let condition = req.body.condition;
  let here = req.body.here;
  let attention = req.body.attention;
  let juryHand = req.body.juryHand;
  let jury = req.body.jury;
  let heard_case = req.body.heard_case;
  let biased = req.body.biased;
  let id = req.body.participantID;

  //put data into row:
  cmd = "INSERT INTO responseDB(id, counterBalance, condition, here, attention, juryHand, jury, heard_case, biased) VALUES (?,?,?,?,?,?,?,?,?) ";
  responseDB.run(cmd, id, counterBalance, condition, here, attention, juryHand, jury,  heard_case, biased, function(err) {
    if (err) {
      console.log("DB insert error",err.message); //
      next();
    } else {
      let newId = this.lastID; // the rowid of last inserted item
      res.send();
    }
  }); // callback, responseDB.run
}); // callback, app.post

// // app.get("/somepath", (req, resp) => {
// //   let id = req.query.id; // Works
// // })

//======================== BUILDING DATABASE SURVEY ===============================
const surveyDB = new sql.Database("survey.db");

let cmd_survey = " SELECT name FROM sqlite_master WHERE type='table' AND name='surveyDB' ";
surveyDB.get(cmd_survey, function (err, val) {
    console.log(err, val);
    if (val == undefined) {
        console.log("No database file - creating one");
        createSurveyDB();
    } else {
        console.log("Database file found");
    }
});

function createSurveyDB() {
  const cmd = 'CREATE TABLE surveyDB ( id TEXT, q1 Text, q2 TEXT)';
  surveyDB.run(cmd, function(err, val) {
    if (err) {
      console.log("Database creation failure",err.message);
    } else {
      console.log("Created database");
    }
    
  });
}

// //======================== INSERT INTO DATABASE ===============================
app.use(bodyParser.json());

app.post('/saveSurveyData', function (req, res, next) {
  console.log(req.body);
 
  let q1 = req.body.q1;
  let q2 = req.body.q2;
  let id = req.body.participantID;

  //put data into row:
  cmd = "INSERT INTO surveyDB(id, q1, q2) VALUES (?,?,?) ";
  surveyDB.run(cmd, id, q1, q2, function(err) {
    if (err) {
      console.log("DB insert error",err.message); //
      next();
    } else {
      let newId = this.lastID; // the rowid of last inserted item
      res.send();
    }
  }); 
}); // callback, app.post
