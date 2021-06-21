import type { ActionType, dataTypeParams } from "./redux_store";

export const getData = (dataType?: dataTypeParams): ActionType => ({
  type: "GET_DATA",
  payload: dataType,
});

export const getArtist = (id: string): ActionType => ({
  type: "GET_ARTIST_DATA",
  payload: id,
});

export const setCurrentIndex = (index: number): ActionType => ({
  type: "SET_CURRENT_INDEX",
  payload: index,
});

export const pausePlayAudio = (isPlaying: boolean): ActionType => ({
  type: "PAUSE_PLAY_TRACK",
  payload: isPlaying,
});
