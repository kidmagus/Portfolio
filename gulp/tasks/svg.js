import gulp from "gulp";
const { parallel } = gulp;

import sprites from "./sprites.js";
import iconfont from "./iconfonts.js";
import config from "../config.js";

// Set sprites task as default
let task = sprites;

// If both are enabled, run in parallel
if (config.icons.iconfont && config.icons.sprites) {
	task = parallel(sprites, iconfont);
} else if (config.icons.iconfont) {
	task = iconfont;
}

export default task;
