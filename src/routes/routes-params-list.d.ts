type baseRNLParams = {
  Tabs: undefined;
  Modals: undefined;
  Home: undefined;
  Artist: {
    artistId: string;
  };
  Player: {
    songId: string;
    qplayer: boolean;
  };
  Search: undefined;
  SearchResults: undefined;
  Library: undefined;
};

export type RPList = {
  Tabs: undefined;
  Modals: NavigatorScreenParams<baseRNLParams>;
  Home: undefined;
  Artist: {
    artistId: string;
  };
  Player: {
    songId: string;
    qplayer: boolean;
  };
  Search: undefined;
  SearchResults: undefined;
  Library: undefined;
};
