const express = require('express');
const router = express.Router();
const User = require('../db/models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { secret } = require('../config');

router.post('/register', (req, res) => {
    const { email, username, password } = req.body;

    let newUser = new User({
        email,
        username,
        password
    });

    newUser
        .save()
        .then(user => {
            if (!user) {
                return res.status(400).send();
                console.log('user not saved');
            }
            return res.status(201).send(user);
        })
        .catch(err => {
            if (err) {
                console.log(err);
                return res.status(400).send({ error: err });
            }
            console.log('error');
            return res.status(400).send();
        });
});

router.post('/login', (req, res) => {
    const { email, password } = req.body;
    User.findOne({ email })
        .then(user => {
            if (!user) {
                return res.status(400).send();
            }
            bcrypt
                .compare(password, user.password)
                .then(match => {
                    if (!match) {
                        return res.status(401).send();
                    }
                    let token = jwt.sign({ _id: user._id }, secret);
                    return res
                        .status(201)
                        .header('x-auth', token)
                        .send();
                })
                .catch(err => {
                    return res.status(401).send({ error: err });
                });
        })
        .catch(err => {
            if (err) {
                return res.status(401).send(err);
            }
            return res.status(401).send();
        });
});

router.post('/favorite', (req, res) => {
    console.log("Favoriting Charity!");
    const id = req.body.mongoID;
    const charityName = req.body.charityName;
    const ein = req.body.ein;
    console.log("Ein" + ein);
    User.findById(id)
        .then(user => {
            if (!user) {
                return res.status(400).send();
            } else {
                let found = false;
                for (let i = 0; i < user.favoriteList.length; i++) {
                    console.log("req.body.ein" + user.favoriteList[i])
                    if (user.favoriteList[i] == req.body.ein) {
                        found = true;
                        //break
                    }
                }
                if (!found) {
                    user.favoriteList.push(ein);
                    user.favoriteData.push({
                        charityName: charityName,
                        ein: ein
                    })
                    user.save(function (err, data) {
                        if (err) return console.error(err);
                    });
                }
                return res.status(200).send();
            }
        })
        .catch(err => {
            if (err) {
                console.log(err)
                return res.status(402).send(err);
            }
            return res.status(401).send();
        });
});

router.post('/unfavorite', (req, res) => {
    console.log("Unfavoriting Charity!");
    const id = req.body.mongoID;
    const ein = req.body.ein;
    console.log("Ein" + ein);
    User.findById(id)
        .then(user => {
            if (!user) {
                return res.status(400).send();
            } else {
                for (let i = 0; i < user.favoriteList.length; i++) {
                    if (user.favoriteList[i] == ein) {
                        user.favoriteList.splice(i, 1);
                    }
                }
                user.save(function (err, data) {
                    if (err) return console.error(err);
                });
                return res.status(200).send();
            }
        })
        .catch(err => {
            if (err) {
                console.log(err)
                return res.status(402).send(err);
            }
            return res.status(401).send();
        });
});

router.get('/userFavorites/:userEmail', (req, res) => {
    const userEmail = req.params.userEmail;
    console.log("Retrieving Favorited EINs for " + userEmail);
    User.findOne({ email: userEmail })
        .then(user => {
            if (!user) {
                return res.status(400).send();
            } else {
                let favList = user.favoriteList;
                res.send({ favoriteList: favList });
            }
        })
        .catch(err => {
            if (err) {
                console.log(err)
                return res.status(402).send(err);
            }
            return res.status(401).send();
        });
});

router.post('/getUsername', (req, res) => {
    const id = req.body.mongoID;
    User.findById(id)
        .then(user => {
            if (!user) {
                return res.status(400).send();
            } else {
                return res
                    .status(201)
                    .header('username', user.username)
                    .send();
            }
        })
        .catch(err => {
            if (err) {
                return res.status(401).send(err);
            }
            return res.status(401).send();
        });
});

module.exports = router;
