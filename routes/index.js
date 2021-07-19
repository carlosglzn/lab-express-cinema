const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.models')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

module.exports = router;

router.get("/movies", (req, res) => {
    Movie.find({})
        .then((moviesFound) => {
            console.log(moviesFound)
            res.render("movies", {
                movies: moviesFound
            })
        })
        .catch((err) => {
            console.log(err)
        })
})

router.get("/movies/:movieId", (req, res) => {
    const { movieId } = req.params
    Movie.findById(movieId)
        .then(singleMovie => {
            console.log(`Película encontrada:`, singleMovie)
            res.render("singleMovie", {
                movie: singleMovie
            })
        })
        .catch(e => console.log(e))
})