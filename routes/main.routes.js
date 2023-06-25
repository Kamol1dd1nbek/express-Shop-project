const { Router } = require("express");
const router = Router();

const productRoute = require('../routes/products.routes');
const authRoute = require("../routes/auth.routes");

router.use(productRoute);
router.use(authRoute);;

module.exports = router;