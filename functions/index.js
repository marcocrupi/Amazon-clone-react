const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { AodOutlined } = require("@mui/icons-material");
const stripe = require("stripe")(
  "sk_test_51Lo6EJCT83zqzJbQNY4UwnNk6HfS5FkiEk2V9iuWqmyfFOrh7YTZtyBjpk8X4hAeFkvXLCJHLXMtC7CHQG8K6mf50065QXxsVV"
);

// API

// App Config
const app = express();

// Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello world"));

// Look at Payment.js
app.post("/payments/create", async (request, response) => {
    const total = request.query.total;
    console.log("Payment request recieved", total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-514e2/us-central1/api