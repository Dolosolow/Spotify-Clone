export type Track = {
  id: string;
  type: "artist" | "track" | "playlist";
  name: string;
  artist: string[];
  artistCover: any;
  cover: any;
  vid: NodeRequire;
  mp3: NodeRequire;
};

export type Artist = {
  id: string;
  type: "artist" | "track" | "playlist";
  name: string;
  cover: any;
  songs: string[] | Track[];
};

export type Playlist = {
  id: string;
  type: "artist" | "track" | "playlist";
  genre: string;
  name: string;
  cover: any;
  color: string;
  played: number;
  songs: Track[];
};

export type AllData = (Track | Artist | Playlist)[];
