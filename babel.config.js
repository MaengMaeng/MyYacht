module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            "@":"./src",
            "@components": "./src/components/",
            "@constants": "./src/constants/",
            "@dummies": "./src/dummies/",
            "@navigation": "./src/navigation",
            "@screens": "./src/screens",
            "@utils": "./src/utils",
            "@assets": "./assets",
          },
        },
      ],
    ],
  };
};
