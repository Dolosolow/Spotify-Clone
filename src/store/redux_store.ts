import { AllData } from "@local/types/index";

export const GET_DATA = "GET_DATA";
export const GET_ARTIST_DATA = "GET_ARTIST_DATA";
export const GET_TRACK = "GET_TRACK";
export const SET_CURRENT_TRACK = "SET_CURRENT_TRACK";
export const PAUSE_TRACK = "PAUSE_TRACK";

export type dataTypeParams = "artist" | "track" | "playlist" | undefined;

export type Store = {
  data: AllData;
  dataFiltered: "track" | "artist" | "playlist" | undefined;
  currentTrack: number | null;
  isPlaying: boolean;
  pauseTrack: boolean;
};

export type ActionType =
  | { type: typeof GET_DATA; payload: "artist" | "track" | "playlist" | undefined }
  | { type: typeof GET_ARTIST_DATA; payload: string }
  | { type: typeof GET_TRACK; payload: string }
  | { type: typeof SET_CURRENT_TRACK; payload: string }
  | { type: typeof PAUSE_TRACK; payload: boolean };
