const router = require('express').Router();

const routes = require('../routesAPI/routesAPI');

router.use(routes);

module.exports = router;