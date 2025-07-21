import gulp from "gulp";
const { dest } = gulp;

import uglify from "gulp-uglify";
import sourcemaps from "gulp-sourcemaps";
import browserify from "browserify";
import babelify from "babelify";
import source from "vinyl-source-stream";
import buffer from "vinyl-buffer";
import replace from "gulp-replace";

import config from "../config.js";
import { isEnvDev, isEnvProd } from "../utilities/environment.js";
import { injectTimeStamp } from "../utilities/timestamp.js";

const babelifyJS = () => {
	const isDev = isEnvDev();
	const isProd = isEnvProd();

	let stream = browserify({
		entries: config.js.entries,
		debug: isDev,
		transform: [
			babelify.configure({
				presets: ["@babel/preset-env"],
				extensions: [".js", ".jsx", ".ts", ".tsx"],
			}),
		],
	})
		.transform("browserify-shim", { global: true })
		.bundle()
		.pipe(source(config.js.name))
		.pipe(buffer());

	if (isDev) {
		stream = stream.pipe(sourcemaps.init());
	}

	if (isProd) {
		stream = stream
			.pipe(
				replace(
					"images/sprites",
					"../wp-content/themes/rohde/assets/images/sprites"
				)
			)
			.pipe(replace(process.env.DEV_URL, ""))
			.pipe(uglify());

		stream = injectTimeStamp(stream);
	}

	if (isDev) {
		stream = stream.pipe(sourcemaps.write());
	}

	return stream.pipe(dest(config.dest.js));
};

export default babelifyJS;
