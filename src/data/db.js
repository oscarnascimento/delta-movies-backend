const low = require("lowdb");
const FileSync = require('lowdb/adapters/FileSync');
const path = require('path');

const pathWithFile = path.join(__dirname, '/moviesData.json');

const adapter = new FileSync(pathWithFile);
const db = low(adapter);

db.defaults({ movies: [] }).write();

exports.getMovies = () => {
    return db.get('movies')
                        .value();
};

exports = db;