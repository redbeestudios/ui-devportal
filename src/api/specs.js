import axios from 'axios';
import express from 'express';
import ApiService from './../app/services/ApiService';

var router = express.Router();

router.get('/specs', (req, res) => {
  ApiService
    .findAll()
    .then(response => res.status(200).json(response))
    .catch(error => res.status(500));
});

router.get('/specs/:id', (req, res) => {
  ApiService
    .findById(req.params.id)
    .then(response => {
      axios
        .get(response[0].url)
        .then(result => res.status(200).json(result.data))
    })
    .catch(error => res.status(500));
});

export default router;
