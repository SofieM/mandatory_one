const router = require('express').Router();

const fs = require('fs');

const modules = fs.readFileSync(__dirname + '/../public/modules/modules.html').toString();
const nodemon_info = fs.readFileSync(__dirname + '/../public/nodemon/nodemon.html').toString();
const express_info = fs.readFileSync(__dirname + '/../public/express/express.html').toString();

router.get('/', (req, res) => {
    return res.send(modules);
});

router.get('/nodemon', (req, res) => {
    return res.send(nodemon_info);
});

router.get('/express', (req, res) => {
    return res.send(express_info);
});


module.exports = router;