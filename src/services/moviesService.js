'use strict';

const _ = require('lodash');

const repository = require('../repositories/moviesRepository');

exports.getByTitle = title => {

    const moviesRaw = repository.getByTitle(title);
    const genresUnique = this.getUniqueGenres(moviesRaw);
    const moviesGenresLists = this.tranformMovieGenresToList(moviesRaw);
    const groupedMovies = this.groupMoviesByGenres(moviesGenresLists, genresUnique);

    return groupedMovies;
};

exports.getByImdbId = imdbId => {
    return repository.getByImdbId(imdbId);
}

/**
 *
 * @param movies
 * @returns movies
 */
exports.tranformMovieGenresToList = movies => {
    return movies.map(item => {
        const newGenre = item.Genre.replace(/\s/g, "").split(',');
        item.Genre = newGenre;
        return item;
    });
};

exports.getUniqueGenres = movies => {

    const genres = movies.map(item => {
        return item.Genre;
    });
    const allGenresString = genres.join().replace(/ /g,'');
    const allGenresArray = allGenresString.split(',');

    return _.uniq(allGenresArray)
};

exports.groupMoviesByGenres = (movies, genres) => {
    const genresCategories = genres.map( genre => {
         const moviesOfGenre = movies.map( movie => {
               const isGenreMatched =  movie.Genre.filter( genreItem => genreItem == genre);
               if (isGenreMatched) return movie;
            }, genre);

         return {
             genre,
             totalMovies: moviesOfGenre.length,
             movies : moviesOfGenre
         }
    }, movies);

    return genresCategories;
};