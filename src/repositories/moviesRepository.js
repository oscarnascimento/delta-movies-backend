'use strict';

const _ = require('lodash');

const db = require('../data/db');

exports.getByTitle = value => {
    const movies = db.getMovies();
    return movies.filter(item => item['Title'].toLowerCase().search(value.toLowerCase()) > -1);
};

exports.getByImdbId = value => {
    return moviesData.find(item => item['imdbID'].toLowerCase().search(value.toLowerCase()) > -1);
};