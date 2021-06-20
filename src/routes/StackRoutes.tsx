import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { useRoute } from "@react-navigation/native";

import { LibraryScreen } from "@local/screens/library-screen";
import { SearchScreen } from "@local/screens/search-screen";
import { ArtistProfileScreen } from "@local/screens/artist-profile-screen";
import { SearchResultsScreen } from "@local/screens/search-results-screen";

import type { RPList } from "./routes-params-list";

const Stack = createStackNavigator<RPList>();

export const StackRoutes = () => {
  const { name } = useRoute();

  return (
    <Stack.Navigator
      mode="card"
      headerMode="none"
      initialRouteName={name === "Search" ? "Search" : "Home"}
      screenOptions={{ cardStyle: { borderTopLeftRadius: 40, borderTopRightRadius: 40 } }}
    >
      {name === "Home" || name === "Library" ? (
        <Stack.Screen name="Library" component={LibraryScreen} />
      ) : (
        <>
          <Stack.Screen name="Artist">{(props) => <ArtistProfileScreen {...props} />}</Stack.Screen>
          <Stack.Screen name="SearchResults" options={{ animationEnabled: false }}>
            {(props) => <SearchResultsScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Search" component={SearchScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};
