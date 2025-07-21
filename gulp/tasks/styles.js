import gulp from "gulp";
const { src, dest } = gulp;

import sass from "gulp-dart-sass";

import clean from "gulp-clean-css";
import sourcemaps from "gulp-sourcemaps";

import config from "../config.js";
import { isEnvDev, isEnvProd } from "../utilities/environment.js";
import { injectTimeStamp } from "../utilities/timestamp.js";

const preprocessSCSS = () => {
	let stream = src(config.blobs.scss);

	const isDev = isEnvDev();
	const isProd = isEnvProd();

	if (isDev) {
		stream = stream.pipe(sourcemaps.init());
	}

	stream = stream
		.pipe(
			sass({
				includePaths: ["node_modules"],
				onError: (error) => {
					console.log(error);
				},
			})
		)
		.pipe(clean());

	if (isProd) {
		stream = injectTimeStamp(stream);
	}

	if (isDev) {
		stream = stream.pipe(sourcemaps.write());
	}

	return stream.pipe(dest(config.dest.css));
};

export default preprocessSCSS;
