const { Router } = require("express");
const { getEpisodes } = require("../controllers");
const { Character, Episode } = require("../db");
const router = Router();

router.get("/", async (req, res, next) => {
    return await Episode.findAll()
    .then((ep) => {
        console.log(ep);
        res.status(200).json(ep)})
    .catch((err) =>next(err));
});


module.exports = router;