const express = require('express');
const serverless = require('serverless-http');
const http = require('http');

const app = express();

const router = express.Router();

router.get('/getArticles', (req, res) => {
    const url = `http://api.mediastack.com/v1/news?access_key=${process.env.VUE_APP_APIKEY}&countries=us&sort=published_desc`;
    http.get(url, function (resp) {
        // console.log('STATUS: ' + resp.statusCode);
        let output = '';
        resp.on('data', (chunk) => {
            output += chunk;
        })
        resp.on('end', () => {
            let jsonObjArr = JSON.parse(output);
            res.send(jsonObjArr);
        });
        resp.on('error', (e) => {
            console.error(e);
        });
    });
});

router.get('/getArticlesByCategory/:category', (req, res) => {
    console.log('req.params');
    console.dir(req.params, { depth: null, colors: true });

    const url = `http://api.mediastack.com/v1/news?access_key=${process.env.VUE_APP_APIKEY}&languages=en&categories=${req.params.category}&sort=published_desc`;
    http.get(url, function (resp) {
        // console.log('STATUS: ' + resp.statusCode);
        let output = '';
        resp.on('data', (chunk) => {
            output += chunk;
        })
        resp.on('end', () => {
            let jsonObjArr = JSON.parse(output);
            res.send(jsonObjArr);
        });
        resp.on('error', (e) => {
            console.error(e);
        });
    });
});

app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);