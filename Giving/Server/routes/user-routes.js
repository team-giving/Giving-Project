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
    const userEmail = req.body.userEmail;
    const ein = req.body.ein;
    console.log(userEmail)
    User.findOne({ email: userEmail })
        .then(user => {
            if (!user) {
                return res.status(400).send();
            } else {
                //console.log(user[0].favoriteList)
                user.favoriteList.push(ein);
                user.save(function (err, data) {
                    if (err) return console.error(err);
                });
                return res.status(300).send();
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

module.exports = router;
