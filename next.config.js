// const nextConfig = {
//   reactStrictMode: true,
// }

const withTM = require("next-transpile-modules")([
  "three",
  // "react-three-fiber",
  "@react-three/fiber",
  // "drei",
  "@react-three/drei"
]);

// module.exports = withTM({
//   webpack(config, options) {
//     config.module.rules.push({
//       test: /\.(glb|gltf)$/,
//       use: {
//         loader: "file-loader",
//       },
//     });

//     return config;
//   }
// })

module.exports = withTM();