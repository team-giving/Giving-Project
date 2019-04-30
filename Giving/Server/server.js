const mongoose = require('./db/mongoose');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const private = require('./routes/private')
const userRoutes = require('./routes/user-routes');

// const bcrypt = require('bcrypt');
// let password = 'myPassword';
// let salt = bcrypt.genSaltSync(12);
// let hashedPassword = bcrypt.hashSync(password, salt);
// console.log("My hashedPassword is equal to", hashedPassword);
// let compare = bcrypt.compareSync(password, hashedPassword);
// console.log(`Comparing passwords: ${compare}`);

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Welcome');
});

app.use('/user', userRoutes);
app.use('/private', private);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started listening on port: ${PORT}`);
});