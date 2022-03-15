const {ApolloServer} = require("apollo-server-express");
const express = require('express');
const logger = require('morgan');
const mongoose = require('mongoose');
const {auth} = require('express-oauth2-jwt-bearer');
const cors = require("cors");
const path = require("path");
const {schema} = require("./schemas");
const {resolvers} = require("./resolvers");

// get environment variables
require('dotenv').config();

// auth0 JWT tokens
const checkJwt = auth({
    audience: process.env.AUTH_AUDIENCE, issuerBaseURL: process.env.AUTH_BASE_URL
});

// connect mongo database
mongoose.connect(process.env.MONGO_DB).catch(console.error);
const database_connection = mongoose.connection;

// express server
const port = 4000;
const app = express();
//const expressServer = http.createServer(app);

// middleware
app.use(logger('dev'));
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({limit: '50mb'}));
app.use(express.static(path.join(__dirname,'build')));
//app.use(checkJwt);

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

// graphql server
const server = new ApolloServer({
    typeDefs: schema,
    resolvers
});

const startUp = async () => {
// start graphql server
    await server.start();

// apply middleware to server
    server.applyMiddleware({app, path: '/graphql'});
}

startUp().catch(console.error);

// database connection error handling
database_connection.on("error", console.error.bind(console, "connection error: "));

// database connection success message
database_connection.once("open", function () {
    console.log("MongoDB Connected successfully");
});

// start express server
app.listen({port}, () => {
    console.log(`Apollo Server on http://localhost:${port}/graphql`);
})