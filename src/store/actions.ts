import type { ActionType, dataTypeParams } from "./redux_store";

export const getData = (dataType?: dataTypeParams): ActionType => ({
  type: "GET_DATA",
  payload: dataType,
});

export const getArtist = (id: string): ActionType => ({
  type: "GET_ARTIST_DATA",
  payload: id,
});

export const getTrack = (id: string): ActionType => ({
  type: "GET_TRACK",
  payload: id,
});

export const setCurrentTrack = (id: string): ActionType => ({
  type: "SET_CURRENT_TRACK",
  payload: id,
});

export const pauseAudioTrack = (pause: boolean): ActionType => ({
  type: "PAUSE_TRACK",
  payload: pause,
});
