import axios from 'axios';
export const GETCHARACTERS = "GETCHARACTERS";
export const GETEPISODES = "GETEPISODES";

export default function fetchCharacters(){
    return async function(dispatch){
        const characters = await axios.get("http://localhost:3001/characters");
        dispatch({
            type: GETCHARACTERS,
            payload: characters.data
        });
    }
}

export default function fetchEpisodes(){
    return async function(dispatch){
        const episodes = await axios.get("http://localhost:3001/episodes");
        dispatch({
            type: GETEPISODES,
            payload: episodes.data
        })
    }
}