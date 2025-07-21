const config = {
	backend: {
		path: "./dist",
		dirs: ["css", "js", "images", "fonts"],
		ignores: ["./build/css/dev.css"],
	},

	js: {
		name: "bundle.min.js",
		entries: "./src/js/main.js",
	},

	paths: {
		src: "./src",
		build: "./build",
	},

	blobs: {
		html: "./src/html/pages/**/*.html",
		scss: "./src/scss/*.scss",
		svg: "./src/svg/*.svg",
		assets: ["./src/fonts/**/*", "./src/images/**/*", "./src/development/**/*"],
	},

	dest: {
		html: "./build/",
		css: "./build/css",
		svg: "./build/images",
		fonts: "./build/fonts/Iconfonts",
		js: "./build/js",
	},

	icons: {
		iconfont: true,
		sprites: true,
	},

	svg: {
		shape: {
			dimension: {
				maxWidth: 100,
				maxHeight: 100,
			},
		},
		mode: {
			symbol: {
				dest: "./sprites",
				sprite: "sprite.svg",
				inline: true,
			},
		},
		svg: {
			xmlDeclaration: true,
			doctypeDeclaration: false,
		},
	},

	iconfont: {
		base: {
			fontName: "Iconfonts",
			//fixedWidth: true,
			centerHorizontally: true,
			normalize: true,
			fontHeight: 1000,
			descent: 0,
		},
		css: {
			fontName: "Iconfonts",
			//path: "./src/scss/vendors/_icons.scss",
			targetPath: "./../../../src/scss/utilities/_icons.scss",
		},
	},

	server: {
		server: "./build",
		open: "auto",
	},
};

export default config;
