'use strict';

const fs = require('fs');
const path = require('path');

let rawdata = fs.readFileSync(path.resolve(__dirname, '../data/movies.json'));
const data =  JSON.parse(rawdata);
const movies = data["movies"];

exports.getByTitle = value => {
    return movies.filter(item => item['Title'].toLowerCase().search(value.toLowerCase()) > -1);
};

exports.getByImdbId = value => {
    return movies.find(item => item['imdbID'].toLowerCase().search(value.toLowerCase()) > -1);
};