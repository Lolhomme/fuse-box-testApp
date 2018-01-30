const path = require('path');
const { FuseBox, VueComponentPlugin, CSSPlugin, SassPlugin, CSSResourcePlugin, WebIndexPlugin } = require("fuse-box");

const fuse = FuseBox.init({
  cache: true,
  homeDir: "src",
  output: "dist/$name.js",
  target: 'browser@es5',
  useTypescriptCompiler: true,
  // allowSyntheticDefaultImports : true,
  polyfillNonStandardDefaultUsage: true,
  plugins: [
    VueComponentPlugin(),
    WebIndexPlugin({
      template: "dist/index.html"
    })
  ]
});

fuse.dev();
fuse.bundle("bundle")
  .instructions("> index.ts").hmr({reload: true}).watch();
fuse.run();