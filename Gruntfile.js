"use strict";

module.exports = function (grunt) {
	require("time-grunt")(grunt);

	require("jit-grunt")(grunt);

	grunt.initConfig({
		"dart-sass": {
			dist: {
				files: {
					"css/styles.css": "css/styles.scss"
				}
			}
		},
		watch: {
			files: "css/*.scss",
			tasks: ["dart-sass"]
		},
		browserSync: {
			dev: {
				bsFiles: {
					src: ["css/*.css", "*.html", "js/*.js"]
				},
				options: {
					watchtask: true,
					server: {
						baseDir: "./"
					}
				}
			}
		}
	});
	grunt.registerTask("css", ["sass"]);
	grunt.registerTask("default", ["browserSync", "watch"]);
};
