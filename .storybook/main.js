// module.exports = {
//   webpackFinal: async (config) => {
//     config.module.rules.push({
//       test: /\.(ts|tsx)$/,
//       use: [
//         {
//           loader: require.resolve("ts-loader"),
//         },
//         // Optional
//         {
//           loader: require.resolve("react-docgen-typescript-loader"),
//         },
//       ],
//     });
//     config.resolve.extensions.push(".ts", ".tsx");
//     return config;
//   },
// };

module.exports = {
  stories: ["../stories/**/*.stories.tsx"],
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve("babel-loader"),
      options: {
        presets: [["react-app", { flow: false, typescript: true }]],
      },
    });
    config.resolve.extensions.push(".ts", ".tsx");
    return config;
  },
};