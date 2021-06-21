import artistsData from "@local/assets/data/artists";
import tracksData from "@local/assets/data/music";
import playlistsData from "@local/assets/data/playlist";

import type { dataTypeParams } from "./redux_store";
import type { AllData, Track } from "@local/types/index";

export function getDataByType(type: dataTypeParams, id: string): AllData;
export function getDataByType(type: dataTypeParams, id?: string): AllData;
export function getDataByType(type: dataTypeParams, id?: string) {
  switch (type) {
    case "artist":
      let data = artistsData.find((artist) => artist.id === id);

      const artistTracks = data?.songs.map((trackId) => {
        return tracksData.find((track) => track.id === trackId) as Track;
      });

      return [Object.assign(data, { songs: [...(artistTracks as Track[])] })];
    case "track":
      return tracksData;
    case "playlist":
      return playlistsData;
    default:
      return [...artistsData, ...tracksData];
  }
}
