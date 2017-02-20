const books = require('google-books-search');
const express = require('express');
const app = express();
app.listen(2017);
app.use(express.static('public'));

app.get('/:title',function(req,res) {
    books.search(req.params.title, function (error, results) {
        if (!error && results.length > 0) {
            res.status(200).send(results[0]);
        } else {
            res.status(500).send(error);
        }
    });
});