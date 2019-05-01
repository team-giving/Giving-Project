const mongoose = require('mongoose');
const {databaseUsername, databasePassword} = require('../config');

mongoose.set('useCreateIndex', true);
const db = mongoose.connection;

db.on('error', console.error); // log any errors that occur

// bind a function to perform when the database has been opened
db.once('open', function () {
    // perform any queries here, more on this later
    console.log("Connected to DB!");
});

// process is a global object referring to the system process running this
// code, when you press CTRL-C to stop Node, this closes the connection
process.on('SIGINT', function () {
    mongoose.connection.close(function () {
        console.log('DB connection closed by Node process ending');
        process.exit(0);
    });
});

// you will replace this with your on url and fill in your password in the next step
const url = `mongodb+srv://${databaseUsername}:${databasePassword}@cluster0-wqvl2.mongodb.net/Giving?retryWrites=true`;
mongoose.connect(url, { useNewUrlParser: true });

module.exports = mongoose;