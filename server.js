const http = require('http');
const dotenv = require('dotenv');
const path = require('path');
const colors = require('colors');

//loading env vars
dotenv.config({ path: './config/config.env' });

const app = require('./app');

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(PORT, () => console.log(`Server is listening on ${PORT}...`.blue));