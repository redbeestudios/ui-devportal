import express from 'express';
import axios from 'axios';

var router = express.Router();
const API_BASE_URL = process.env.API_BASE_URL;

router.get('/users/me', (req, res) => {
  axios
    .get(
      `${API_BASE_URL}/api/v1.0/clientes/${req.cookies['x-oauth-user']}/activos?tipo_documento=1&pais=chl&estado=A`
      , { headers: {'Authorization': `Bearer ${req.cookies['x-oauth-login']}`}})
    .then(response => res.status(200).json(response.data))
    .catch(error => res.status(500));
});

export default router;
