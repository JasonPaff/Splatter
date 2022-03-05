const express = require('express');
const http = require('http');
const debug = require("debug");
const logger = require('morgan');
const mongoose = require('mongoose');
const {buildSchema} = require('graphql');
const {graphqlHTTP} = require('express-graphql');
const {auth} = require('express-oauth2-jwt-bearer');
const cors = require("cors");
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
app.use(cors({origin: process.env.APP_ORIGIN,}));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(checkJwt);

// Construct a schema, using GraphQL schema language
// input TicketInput is for creating
// type Ticket is for updating
const schema = buildSchema(`
  input TicketInput {
    title: String
    severity: String
    priority: Int
    type: String
    product: String
    browser: String
    screenshot: String
    summary: String
    reproductionSteps: String
    expectedResult: String
    actualResult: String
    createdAt: String
    createdBy: String
    assignedTo: String
    status: String
  }

  type Ticket {
    id: ID!
    title: String
    severity: String
    priority: Int
    type: String
    product: String
    browser: String
    screenshot: String
    summary: String
    reproductionSteps: String
    expectedResult: String
    actualResult: String    
    createdAt: String
    createdBy: String
    assignedTo: String
    status: String
  }

  type Query {
    getTicket(id: ID!): Ticket
  }

  type Mutation {
    createTicket(input: TicketInput): Ticket
    updateTicket(id: ID!, input: TicketInput): Ticket
    deleteTicket(id: ID!) : Ticket
  }
`);

// mongodb ticket schema
const ticketSchema = new mongoose.Schema({
    title: String,
    severity: String,
    priority: Number,
    type: String,
    product: String,
    browser: String,
    screenshot: String,
    summary: String,
    reproductionSteps: String,
    expectedResult: String,
    actualResult: String,
    createdAt: Date,
    createdBy: String,
    assignedTo: String,
    status: String
});

// mongodb ticket model
const Ticket = mongoose.model('Ticket', ticketSchema);

const root = {
    createTicket: ({input}) => {
        const ticket = new Ticket(input);
        console.log(ticket);
        ticket.save();
        return ticket;
    },
    getTicket: ({id}) => {
    },
    updateTicket: ({id, input}) => {
    },
    deleteTicket: ({id}) => {
    }
};

// graphQL endpoint
app.use('/graphql', graphqlHTTP({
    schema: schema, rootValue: root, graphiql: true
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