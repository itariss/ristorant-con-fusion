"use strict";

var gulp = require("gulp"),
	sass = require("gulp-dart-sass"),
	browserSync = require("browser-sync");

gulp.task("sass", function () {
	return gulp
		.src("./css/*.scss")
		.pipe(sass().on("error", sass.logError))
		.pipe(gulp.dest("./css"));
});

gulp.task("sass:watch", function () {
	gulp.watch("./css/*.scss", { events: "all" }, gulp.series("sass"));
});

gulp.task("browserSync", function () {
	var files = [
		"./*html",
		"./css/*.css",
		"./js/*.js",
		"./img/*.{png,jpg,gif}"
	];

	browserSync.init(files, {
		server: {
			baseDir: "./"
		}
	});
});

gulp.task("default", gulp.series("browserSync"), function () {
	gulp.start("sass:watch");
});
