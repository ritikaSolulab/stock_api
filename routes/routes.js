const router = require("express").Router();
const stockApi = require("../controllers/stock");

//get the stock api
router.get('/stockPrice/:symbol', stockApi);

module.exports = router;
