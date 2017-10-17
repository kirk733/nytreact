
require('dotenv').config({path: './config/.env'}); //Setting up our own environment

const mongoose = require('mongoose');
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();
const articleRouter = require('./routes/article.js');

const db = process.env.MONGODB_KEY;
const PORT = process.env.PORT || 3001;
mongoose.Promise = Promise;
mongoose.connect(db);

mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + db);
});

mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});

app.use(bodyParser.json());

app.use("/api/saved", articleRouter);

app.post("/api/search", (req, res) => {
    console.log("Search, search, search", req.body);

    // const searchTerm = {req.body};

    const options = { method: 'GET',
        url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json',
        qs: req.body,
        headers: {
            'api-key': process.env.NYT_API_KEY
        }
    };
    request(options, (err, results, body) => {
        console.log('Results are? ', process.env.NYT_API_KEY);
        res.send(results);
    });
});

app.listen(PORT, () => {
    console.log("Server started on port 3001");
});