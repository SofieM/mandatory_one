const router = require('express').Router();

const fs = require('fs');

const node = fs.readFileSync(__dirname + '/../public/node/node.html').toString();
const asyncInfo = fs.readFileSync(__dirname + '/../public/async/async.html').toString();

router.get('/', (req, res) => {

    return res.send(node);
});

router.get('/async', (req, res) => {
    return res.send(asyncInfo);
});

module.exports = router;