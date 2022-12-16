const router = require("express").Router();
// const thoughtsRoutes = require("./thoughtsRoutes");
const userRoutes = require("./userRoutes");
const thoughtsRoutes = require("./thoughtsRoutes");

// router.use('/thoughts', thoughtsRoutes);
router.use("/user", userRoutes);
router.use("/thoughts", thoughtsRoutes);

module.exports = router;
