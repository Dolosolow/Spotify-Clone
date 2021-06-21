import React from "react";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import EStyleSheet from "react-native-extended-stylesheet";

import { Routes } from "./src/routes";
import { store } from "@local/store/index";

StatusBar.setBarStyle("light-content", true);

EStyleSheet.build({
  $rem: 10,
});

const App = () => (
  <Provider store={store}>
    <Routes />
  </Provider>
);

export default App;
