
import gulp from "gulp";
const { watch, series, parallel } = gulp;
import browserSync from "browser-sync";

import { setEnvToProd } from "./gulp/utilities/environment.js";

import html from "./gulp/tasks/html.js";
import css from "./gulp/tasks/styles.js";
import js from "./gulp/tasks/scripts.js";
import svg from "./gulp/tasks/svg.js";
import assets from "./gulp/tasks/assets.js";

import backend from "./gulp/tasks/backend.js";
import clean from "./gulp/tasks/clean.js";

let server = browserSync.create();

const watchFiles = () => {
	server.init({
		server: "./build",
		open: false,
		notify: true, // optional: shows a small reload badge
	});

	// Reload the browser after the task finishes
	watch("./src/html/**/*.html", series(html, (done) => {
	server.reload();
	done();
	}));

	watch("./src/scss/**/*.scss", series(css, (done) => {
	server.reload();
	done();
	}));

	watch("./src/js/**/*.js", series(js, (done) => {
	server.reload();
	done();
	}));

	watch("./src/svg/**/*.svg", series(svg, (done) => {
	server.reload();
	done();
	}));

};

const build = series(clean, parallel(series(svg, css), html, js), assets);

const serve = series(build, watchFiles);
const prod = series(setEnvToProd, build);

const publish = series(prod, backend);

export default serve;

export { html, css, js, svg, assets, build, prod, serve, publish };
