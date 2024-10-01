const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is the prodcuts route');
});

router.get('/kitten-mittens', (req, res) => {
    console.log({data: 'kitten mittens route hit!'});
    res.send({data: 'kitten mittens route hit!'});
});

router.get('/doggles', (req, res) => {
    res.send({data: 'this is the doggles route'});
});

router.get('/clown-shoes', (req, res) => {
    res.send({data: 'this is the clown shoes route'});
});

router.get('/nonfat-water', (req, res) => {
    res.send({data: 'this is the nonfat water route'});
});

module.exports = router;