'use strict';

const service = require('../services/moviesService');

exports.get = (req, res, next) => {
    res.status(200).json('Requisição recebida com sucesso!');
};

exports.getById = (req, res, next) => {
    res.status(200).json('Requisição recebida com sucesso!');
};

exports.getByImdbId = (req, res, next) => {
    const movie = service.getByImdbId(req.params.imdbId);

    if (!movie) {
        res.status(404).json({mensagem: "Filme não encontrado.", status: 404});
    }

    res.status(200).json(movie);
};

exports.searchByTitle = (req, res, next) => {
    const title = req.params.title;

    const groupedMovies = service.getByTitle(title);

    res.status(200).json(groupedMovies);
};

exports.post = (req, res, next) => {
    res.status(201).json('Requisição recebida com sucesso!');
};

exports.put = (req, res, next) => {
    let id = req.params.id;
    res.status(201).json(`Requisição recebida com sucesso! ${id}`);
};

exports.delete = (req, res, next) => {
    let id = req.params.id;
    res.status(200).json(`Requisição recebida com sucesso! ${id}`);
};

