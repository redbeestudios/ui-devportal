import express from 'express';
import axios from 'axios';
import apis from './../app/apis.json';

var router = express.Router();

router.get('/specs/:id', (req, res) => {
  axios
    .get(apis[req.params.id])
    .then(response => res.status(200).json(response.data))
    .catch(error => res.status(500));
});

export default router;
