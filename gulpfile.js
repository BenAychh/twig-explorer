const plumber = require('gulp-plumber');
const gulp = require("gulp");
const browserify = require("browserify");
const watchify = require("watchify");
const source = require('vinyl-source-stream');
const tsify = require("tsify");
const paths = {
    pages: ['src/*.html'],
    css: ['src/*.css'],
    ts: ['src/**/*'],
};

gulp.task("copy-html", function () {
    try {
        return gulp.src(paths.pages).pipe(gulp.dest("dist"));
    } catch (error) {
        console.error('copy-html error:', error);
    }
});

gulp.task("copy-css", function () {
    try {
        return gulp.src(paths.css).pipe(gulp.dest("dist"));
    } catch (error) {
        console.error('copy-css error:', error);
    }
});

gulp.task("compile-and-copy-ts", function () {
    
    const bundler = browserify({
        basedir: '.',
        debug: true,
        entries: ['src/main.ts'],
        cache: {},
        packageCache: {}
    });
    
    function bundle() {
        return bundler
        .plugin(tsify)
        .bundle()
        .on('error', onError)
        .pipe(source('bundle.js'))
        .pipe(gulp.dest("dist"));
    }

    bundle();
});

gulp.task("watch-html", function () {
    gulp.watch(paths.pages, ["copy-html"]);
})

gulp.task("watch-css", function () {
    gulp.watch(paths.css, ["copy-css"]);
});

gulp.task("watch-ts", function () {
    gulp.watch(paths.ts, ["compile-and-copy-ts"]);
});

gulp.task("default", ["copy-html", "copy-css", "compile-and-copy-ts", "watch-html", "watch-css", "watch-ts"], function () {
    console.log("Starting and Watching");
});

function onError(error) {
    console.error(error);
}