const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('this is the prodcuts route');
});

router.get('/kitten-mittens', (req, res) => {
    res.send('this is the kitten mittens route');
});

router.get('/doggles', (req, res) => {
    res.send('this is the doggles route');
});

module.exports = router;