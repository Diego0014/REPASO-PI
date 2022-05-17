const { Router } = require("express");
const { getCharacters } = require("../controllers");
const { Character, Episode } = require("../db");
const router = Router();

router.get("/", async (req, res, next) => {
  try {
    const charactersApi = await getCharacters();
    const charactersDb = await Character.findAll().then((results) => results);
    const allChars = [...charactersApi, ...charactersDb];
    res.send(allChars);
  } catch (error) {
    next(error);
    res.send(error.message);
  }
});

router.post("/", async (req, res, next) => {
  try {
    const { name, species, origin, image, episode } = req.body;
    console.log(episode);
    const newCharacter = await Character.create({
      name,
      species,
      origin,
      image,
    });
    const addEpisodes = await Episode.findAll({ where: { name: episode } });
    await newCharacter.addEpisode(addEpisodes);
    res.send(newCharacter);
  } catch (error) {
    next(error);
    console.log(error);
  }
});

module.exports = router;
