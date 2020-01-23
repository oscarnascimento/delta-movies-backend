const express = require('express');
const router = express.Router();
const controller = require('./../controllers/moviesController');

router.get('/', controller.get);
router.get('/:id', controller.getById);
router.get('/title/:title', controller.searchByTitle);
router.get('/imdb/:imdbId', controller.getByImdbId);
router.post('/', controller.post);
router.put('/:id', controller.put);
router.delete('/:id', controller.delete);

module.exports = router;