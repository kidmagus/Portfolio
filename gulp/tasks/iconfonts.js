import gulp from "gulp";
const { src, dest } = gulp;

import iconfont from "gulp-iconfont";
import iconfontCSS from "gulp-iconfont-css";

import config from "../config.js";

const generateIconfonts = () =>
	src(config.blobs.svg)
		.pipe(iconfontCSS(config.iconfont.css))
		.pipe(iconfont(config.iconfont.base))
		.pipe(dest(config.dest.fonts));

export default generateIconfonts;
