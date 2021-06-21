import { AllData } from "@local/types/index";

export const GET_DATA = "GET_DATA";
export const GET_ARTIST_DATA = "GET_ARTIST_DATA";
export const SET_CURRENT_INDEX = "SET_CURRENT_INDEX";
export const PAUSE_PLAY_TRACK = "PAUSE_PLAY_TRACK";

export type dataTypeParams = "artist" | "track" | "playlist" | undefined;

export type Store = {
  data: AllData;
  dataFiltered: "track" | "artist" | "playlist" | undefined;
  currentIndex: number | null;
  isPlaying: boolean;
};

export type ActionType =
  | { type: typeof GET_DATA; payload: "artist" | "track" | "playlist" | undefined }
  | { type: typeof GET_ARTIST_DATA; payload: string }
  | { type: typeof SET_CURRENT_INDEX; payload: number }
  | { type: typeof PAUSE_PLAY_TRACK; payload: boolean };
