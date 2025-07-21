const setEnvironment = (env, done) => {
	switch (env) {
		case "production": {
			process.env.NODE_ENV = "production";
			break;
		}

		case "developmnent":
		default: {
			process.env.NODE_ENV = "developmnent";
			break;
		}
	}

	//Fire callback to signal async completion.
	done();
};

const setEnvToProd = setEnvironment.bind(this, "production");
const setEnvToDev = setEnvironment.bind(this, "developmnent");

const checkEnvironment = () => {
	return process.env.NODE_ENV;
};

const isEnvDev = () => {
	const env = checkEnvironment();

	//If environment is not set, default to true. Also true if not production.
	return env ? env != "production" : true;
};

const isEnvProd = () => {
	//If environment is production, it is for production.
	return checkEnvironment() == "production";
};

export {
	//Environment getter.
	setEnvironment,
	setEnvToProd,
	setEnvToDev,

	//Environment checker.
	checkEnvironment,
	isEnvDev,
	isEnvProd,
};
