import inject from "gulp-inject-string";

const generateTimestamp = () => {
	let dateAndTime = new Date();

	return (
		`/* Built at ${dateAndTime.toLocaleString()}. */` + "\n" //Add new line.
	);
};

const injectTimeStamp = (stream) => {
	//Inject generated timestamp to passed stream.
	return stream.pipe(inject.prepend(generateTimestamp()));
};

export { generateTimestamp, injectTimeStamp };
