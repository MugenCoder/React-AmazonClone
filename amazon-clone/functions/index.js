const functions = require('firebase-functions');
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_MDyQEFRmkqhJrAIE1goTETyP00uNJXaJVB')

// *** API Setup ***
// - App Config
const app = express();

// - Middlewares
app.use(cors({origin: true })); // cors = security
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

// - Listen command
exports.api = functions.https.onRequest(app);