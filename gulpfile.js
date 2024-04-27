const gulp = require("gulp"),
  fileinclude = require("gulp-file-include");

gulp.task("include", function () {
  return gulp
    .src("./src/*.html")
    .pipe(
      fileinclude({
        prefix: "@@",
        basepath: "@file",
      })
    )
    .pipe(gulp.dest("./public/"));
});

gulp.task("watch", () => {
  gulp.watch("./src/**/*.html", gulp.series("include"));
});
