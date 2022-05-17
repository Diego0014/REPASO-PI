const axios = require("axios");
const { Episode } = require("../db");

const getEpisodes = async () => {
  const { data } = await axios.get("https://rickandmortyapi.com/api/episode");
  let allEpisodes = data.results.map((e) => e.name);
  allEpisodes = Array.from(new Set(allEpisodes)).sort();
  for await (let ep of allEpisodes) {
    Episode.create({ name: ep });
  }
};

const getCharacters = async () => {
  const { data } = await axios.get("https://rickandmortyapi.com/api/character");
  const characters = data.results.map((e) => {
    return {
      id: e.id,
      name: e.name,
      species: e.species,
      image: e.image,
      origin: e.origin.name,
      episodes: e.episode,
    };
  });
  return characters;
};

module.exports = { getEpisodes, getCharacters };
