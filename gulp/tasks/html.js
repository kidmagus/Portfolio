import gulp from "gulp";
const { src, dest } = gulp;

import fileInclude from "gulp-file-include";
import pretty from "gulp-pretty-html";
import plumber from "gulp-plumber";
import notify from "gulp-notify"; // ✅ optional, nice visual errors

import config from "../config.js";

const compileHTML = () =>
  src(config.blobs.html)
    .pipe(
      plumber({
        errorHandler: notify.onError("HTML Error: <%= error.message %>"),
      })
    )
    .pipe(
      fileInclude({
        prefix: "@@",
        basepath: "./src/html", // make sure this points to your root partials folder
      })
    )
    .pipe(pretty())
    .pipe(dest(config.dest.html));

export default compileHTML;
