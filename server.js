const express = require('express');
const http = require('http');
const debug = require("debug");
const logger = require('morgan');
const mongoose = require('mongoose');
const {graphqlHTTP} = require('express-graphql');
const {auth} = require('express-oauth2-jwt-bearer');
const cors = require("cors");
const {graphTicketSchema} = require("./graphQLSchemas");
const {rootResolver} = require("./graphQLResolvers");
const path = require("path");
require('dotenv').config();

const checkJwt = auth({
    audience: process.env.AUTH_AUDIENCE, issuerBaseURL: process.env.AUTH_BASE_URL
});

mongoose.connect(process.env.MONGO_DB).catch(console.error);
const database_connection = mongoose.connection;

const port = 4000;
const app = express();
const server = http.createServer(app);

app.set('port', port);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

app.use(logger('dev'));
app.use(cors({origin: process.env.APP_ORIGIN}));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(express.static(path.join(__dirname,'build')));
app.use(checkJwt);

// graphQL query/mutation endpoint
app.use('/graphql', graphqlHTTP({
    schema: graphTicketSchema, rootValue: rootResolver, graphiql: true
}));

// database error handler
database_connection.on("error", console.error.bind(console, "connection error: "));

// logon success message
database_connection.once("open", function () {
    console.log("MongoDB Connected successfully");
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