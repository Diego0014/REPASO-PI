const { Router } = require("express");
const episodes = require("./episodes")
const characters = require("./characters")
const router = Router();

// Configurar los routers
router.use('/episodes', episodes);
router.use('/characters', characters);


module.exports = router;
