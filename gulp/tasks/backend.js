import gulp from "gulp";
const { src, dest } = gulp;

import del from "del";
import config from "../config.js";

const publishSuccessMessage = () => {
	const $message =
		`********************************************************` +
		`\n` +
		`SUCCESSFULLY PUBLISHED ${config.backend.dirs.join(", ")} to ${
			config.backend.path
		} at ${new Date().toLocaleString()}.` +
		`\n\n` +
		`The following were ignored and excluded:\n ${config.backend.ignores.join(
			"\n"
		)}.` +
		`\n` +
		`********************************************************`;

	console.log($message);
};

const publishBuildToBackend = () => {
	// Generate array of paths to include
	const blobs = config.backend.dirs.map(
		(dir) => `${config.paths.build}/${dir}/**/*`
	);

	// Exclude ignored files
	for (const dir of config.backend.ignores) {
		blobs.push(`!${dir}`);
	}

	// Force-delete the destination
	del.sync(config.backend.path, { force: true });

	// Copy matching files
	const stream = src(blobs, { base: config.paths.build })
		.pipe(dest(config.backend.path));

	// Log success
	publishSuccessMessage();

	return stream;
};

export default publishBuildToBackend;
