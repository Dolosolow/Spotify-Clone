import { getDataByType } from "./utils";
import type { Store, ActionType } from "./redux_store";

const INITIAL_STATE: Store = {
  data: [],
  filteredData: [],
  dataFiltered: undefined,
  currentIndex: null,
  isPlaying: false,
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

      if (state.filteredData.length === 0 || state.filteredData[0].name !== artistData[0].name) {
        return {
          ...state,
          filteredData: [...artistData],
          dataFiltered: "artist",
        };
      }

      return state;
    case "SET_CURRENT_INDEX":
      return {
        ...state,
        isPlaying: true,
        currentIndex: action.payload,
      };
    case "PAUSE_PLAY_TRACK":
      return {
        ...state,
        isPlaying: action.payload,
      };
    default:
      return state;
  }
};
