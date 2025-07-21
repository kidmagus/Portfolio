import gulp from "gulp";
const { src, dest } = gulp;

import svgSprite from "gulp-svg-sprite";
import config from "../config.js";

const generateSprites = () =>
	src(config.blobs.svg)
		.pipe(svgSprite(config.svg))
		.pipe(dest(config.dest.svg));

export default generateSprites;
