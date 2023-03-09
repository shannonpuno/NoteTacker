const router = require('express').Router();

const routes = require('../apiRoute/routesAPI');


router.use(routes);

module.exports = router;