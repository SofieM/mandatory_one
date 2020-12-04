const router = require('express').Router();

const fs = require('fs');

const path = 'C:\\Users\\Sofie\\IdeaProjects\\node_valgfag\\mandatory_one\\1._mandatory\\';

const modules = fs.readFileSync(path + '/public/modules/modules.html').toString();
const nodemon_info = fs.readFileSync(path + '/public/nodemon/nodemon.html').toString();
const express_info = fs.readFileSync(path + '/public/express/express.html').toString();

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