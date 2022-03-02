const express = require('express');
const http = require('http');
const debug = require("debug");
const logger = require('morgan');
const mongoose = require('mongoose');
const { auth } = require('express-oauth2-jwt-bearer');
const cors = require("cors");

mongoose.connect("mongodb+srv://jasonpaff:paffword@issuetracker.kuz0d.mongodb.net/IssueTracker?retryWrites=true&w=majority").catch(console.error);
const database_connection = mongoose.connection;

const port = process.env.PORT || 4000;
const app = express();
const server = http.createServer(app);

app.set('port', port);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

app.use(logger('dev'));
app.use(cors({ origin: 'http://localhost:3000', }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const checkJwt = auth({
    audience : "https://dev-eyvtzgck.us.auth0.com/api/v2/",
    issuerBaseURL: `https://dev-eyvtzgck.us.auth0.com/`
});

// ROUTES
app.use("/", checkJwt, require('./routes/test.js'));

// database error handler
database_connection.on("error", console.error.bind(console, "connection error: "));

// logon success message
database_connection.once("open", function () {
    console.log("Connected successfully");
});

// server error handler
function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

// console server logging
function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    debug('Listening on ' + bind);
}