module.exports = {
  plugins: [
    "nativewind/babel",
    [
      "module-resolver",
      {
        extensions: [
          ".ios.js",
          ".android.js",
          ".ios.jsx",
          ".android.jsx",
          ".js",
          ".jsx",
          ".json",
          ".ts",
          ".tsx",
        ],
        root: ["."],
        alias: {
          "@/*": ["./*"]
        },
      },
    ],
  ],
  presets: [
    "@babel/preset-env",
    "@babel/preset-react",
    "module:metro-react-native-babel-preset",
  ],
};
