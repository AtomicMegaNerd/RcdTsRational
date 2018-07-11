const gulp = require("gulp");
const ts = require("gulp-typescript");
const tslint = require('gulp-tslint');
const tsProject = ts.createProject("tsconfig.json");

gulp.task("tslint", () =>
    gulp.src("src/**/*.ts")
    .pipe(tslint({
        formatter: "verbose"
    }))
    .pipe(tslint.report())
);

gulp.task("default", () =>
    tsProject.src()
    .pipe(tsProject())
    .js.pipe(gulp.dest("dist"))
);