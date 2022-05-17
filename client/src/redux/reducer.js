import { GETCHARACTERS, GETEPISODES } from "./actions";

const initialState = {
  characters: [],
  episodes: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case GETCHARACTERS:
      return {
        ...state,
        characters: action.payload,
      };

    case GETEPISODES:
      return {
        ...state,
        episodes: action.payload,
      };

    default:
      return state;
  }
}

