import gulp from "gulp";
const { src, dest } = gulp;

import config from "../config.js";

const copyAssets = () => {
	const stream = src(config.blobs.assets, { base: config.paths.src });
	return stream.pipe(dest(config.paths.build));
};

export default copyAssets;
