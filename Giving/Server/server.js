const mongoose = require('./db/mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const searches = require("./charityNavAPI/searches");
const homeLists = require("./charityNavAPI/homePageLists");
const private = require('./routes/private');
const userRoutes = require('./routes/user-routes');

// const bcrypt = require('bcrypt');
// let password = 'myPassword';
// let salt = bcrypt.genSaltSync(12);
// let hashedPassword = bcrypt.hashSync(password, salt);
// console.log("My hashedPassword is equal to", hashedPassword);
// let compare = bcrypt.compareSync(password, hashedPassword);
// console.log(`Comparing passwords: ${compare}`);

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.use('/search', searches)
app.use('/home', homeLists)
app.use('/user', userRoutes);
app.use('/private', private);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started listening on port: ${PORT}`);
});
