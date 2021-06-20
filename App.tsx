import React from "react";
import { StatusBar } from "react-native";
import EStyleSheet from "react-native-extended-stylesheet";

import { Routes } from "./src/routes";

StatusBar.setBarStyle("light-content", true);

EStyleSheet.build({
  $rem: 10,
});

const App = () => (
  <>
    <Routes />
  </>
);

export default App;
