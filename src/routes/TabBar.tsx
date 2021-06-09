import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { BottomTabBarProps, BottomTabBarOptions } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import ReAnimated, { Extrapolate } from "react-native-reanimated";

const S = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 80,
    borderTopWidth: 0.75,
    alignItems: "flex-start",
    borderTopColor: "#E8E8E8",
    top: 0,
  },
  tabButton: { flex: 1, justifyContent: "center", alignItems: "center", marginTop: 10 },
  activeTab: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  activeTabInner: {
    width: 40,
    height: 40,
    color: "#ee4964",
  },
  tabFont: {
    fontSize: 12,
    marginTop: 3,
  },
});

type ITabBarProps = BottomTabBarProps<BottomTabBarOptions> & {
  yPosition: ReAnimated.Value<number>;
};

const { width } = Dimensions.get("window");

const AnimatedPosition = (value: ReAnimated.Value<number>) => {
  return {
    height: ReAnimated.interpolateNode(value, {
      inputRange: [400, 1000],
      outputRange: [80, 0],
      extrapolate: Extrapolate.CLAMP,
    }),
    opacity: ReAnimated.interpolateNode(value, {
      inputRange: [740, 800],
      outputRange: [1, 0],
    }),
    top: ReAnimated.interpolateNode(value, {
      inputRange: [400, 2000],
      outputRange: [0, 80],
      extrapolate: Extrapolate.CLAMP,
    }),
  };
};

export const TabBar = (props: ITabBarProps) => {
  const { activeTintColor = "red", inactiveTintColor = "#121212" } = props;
  const {
    navigation,
    descriptors,
    state: { routes, index },
  } = props;

  const { height, opacity, top } = AnimatedPosition(props.yPosition);

  return (
    <ReAnimated.View style={[S.container, { top, height, opacity }]}>
      <View>
        <View style={StyleSheet.absoluteFillObject}>
          <View style={[S.activeTab, { width: width / routes.length }]}>
            <View style={S.activeTabInner} />
          </View>
        </View>
      </View>
      {routes.map((route, routeIndex) => {
        const isRouteActive = routeIndex === index;
        const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

        return (
          <TouchableOpacity
            key={routeIndex}
            activeOpacity={1}
            style={S.tabButton}
            onPress={() => {
              navigation.navigate(route.name);
            }}
          >
            <AntDesign name="home" size={25} color={tintColor} />
            <Text style={{ ...S.tabFont, color: tintColor }}>{route.name}</Text>
          </TouchableOpacity>
        );
      })}
    </ReAnimated.View>
  );
};
