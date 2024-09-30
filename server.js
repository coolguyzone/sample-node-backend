const express = require('express');
const productsRoute = require('./routes/products');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hello, Express.js Server here!</h1>');
});

app.use('/products', productsRoute);

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     res.write('<h1>Hello, Node.js HTTP Sever Here!</h1>');
//     res.end();
// });

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});