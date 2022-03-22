module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo", "module:metro-react-native-babel-preset"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@local/assets": "./assets",
            "@local/components": "./src/components",
            "@local/routes": "./src/routes",
            "@local/screens": "./src/screens",
            "@local/store": "./src/store",
            "@local/types": "./src/types",
            "@local/utils": "./src/utils",
            "@local/hooks": "./src/hooks",
          },
        },
      ],
    ],
  };
};
