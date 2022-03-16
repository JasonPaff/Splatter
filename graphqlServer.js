const {ApolloServer} = require("apollo-server-express");
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const {auth} = require('express-oauth2-jwt-bearer');
const cors = require("cors");
const path = require("path");
const {schema} = require("./schemas");
const {resolvers} = require("./resolvers");
const http = require('http');
const {Ticket, Message} = require("./mongoModels");

require('dotenv').config();

const checkJwt = auth({
    audience: process.env.AUTH_AUDIENCE, issuerBaseURL: process.env.AUTH_BASE_URL
});

mongoose.connect(process.env.MONGO_DB).catch(console.error);
const database_connection = mongoose.connection;

const port = 4000;
const app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(express.static(path.join(__dirname, 'build')));
app.use(checkJwt);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// graphql server
const server = new ApolloServer({
    typeDefs: schema,
    resolvers,
    context: async({ req, connection}) => {
        if (connection) {
            return {
                Message, Ticket
            }
        }
        if (req) {
            return {
                Message, Ticket,
            }
        }
    }
});

const startUp = async () => {
    await server.start();
    server.applyMiddleware({app, path: '/graphql'});
    server.installSubscriptionHandlers(httpServer)
}

const httpServer = http.createServer(app);
startUp().catch(console.error);

database_connection.on("error", console.error.bind(console, "connection error: "));
database_connection.once("open", function () {
    console.log("MongoDB Connected successfully");
});

// httpServer.listen({port: port}, () => {
//     console.log(`Apollo Server on http://localhost:${port}/graphql`);
// })

httpServer.listen({port: process.env.PORT}, () => {
    console.log(`Apollo Server on https://splatter-app.herokuapp.com/graphql`);
})