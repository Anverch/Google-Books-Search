const router = require("express").Router();
const bookRoutes = require("./books");
const googleController = require("../../controllers/googleController");

router.get("/search/:searchTerm", googleController.search)

// Book routes
router.use("/books", bookRoutes);

module.exports = router;
