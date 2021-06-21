import { getDataByType } from "./utils";
import type { Store, ActionType } from "./redux_store";

const INITIAL_STATE: Store = {
  data: [],
  dataFiltered: undefined,
  currentTrack: null,
  isPlaying: false,
  pauseTrack: false,
};

export const rootReducer = (state: Store = INITIAL_STATE, action: ActionType) => {
  switch (action.type) {
    case "GET_DATA":
      const fetchedData = getDataByType(action.payload);
      return {
        ...state,
        data: fetchedData,
        dataFiltered: action.payload,
      };
    case "GET_ARTIST_DATA":
      const artistId = action.payload;
      const artistData = getDataByType("artist", artistId);

      return {
        ...state,
        data: [...artistData],
      };
    case "GET_TRACK":
      return state;
    case "SET_CURRENT_TRACK":
      return state;
    case "PAUSE_TRACK":
      return state;
    default:
      return state;
  }
};
