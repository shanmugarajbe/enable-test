const express = require('express');
const swaggerJsdoc = require('swagger-jsdoc');
const apiController = require('../../controllers/apitest.controller');

const router = express.Router();



// router.use('/', swaggerUi.serve);
// router.post('/',apiController.createRoom);

router
  .route('/')
  .get(apiController.createRoom)

module.exports = router;
