/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

"use strict";

require("source-map-support").install();
require("ts-node").register({
  compilerOptions: {
    module: "commonjs",
    target: "es2017",
  },
});

exports.createPages =
  require("./src/blogGeneration/createBlogPosts").createBlogPosts;
