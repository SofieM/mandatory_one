const router = require('express').Router();

const fs = require('fs');

const path = 'C:\\Users\\Sofie\\IdeaProjects\\node_valgfag\\mandatory_one\\1._mandatory\\';

const node = fs.readFileSync(path + '/public/node/node.html').toString();
const asyncInfo = fs.readFileSync(path + '/public/async/async.html').toString();

router.get('/', (req, res) => {

    return res.send(node);
});

router.get('/async', (req, res) => {
    return res.send(asyncInfo);
});

module.exports = router;