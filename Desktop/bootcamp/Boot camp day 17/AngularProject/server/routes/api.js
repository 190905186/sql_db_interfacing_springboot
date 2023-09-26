const express = require('express')
const mongoose = require('mongoose')
const User = require('../models/user')

const router = express.Router()
const dummyData = require('../content')
const db = "mongodb://localhost:27017"


mongoose.connect(db).then(result => console.log("Connected to the Database")).catch((err) => console.log("Error caught "+err))

router.get('/', (req, res) => {
    res.send('hello welcome to the express backend')
})

router.post('/register', (req, res) => {
    let data = req.body
    console.log(data)
    const userData = new User(data)
    userData.save().then(registeredUser => {
        res.status(200).send(registeredUser);
    }).catch(err => console.log(err))
})


router.get('/events', (req, res) => {
    res.status(200).send(dummyData)
})

router.get('/specials', (req, res) => {
    res.status(200).send(dummyData)
})

module.exports = router;

