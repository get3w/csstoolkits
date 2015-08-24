var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var sass = require('gulp-sass');
var combiner = require('stream-combiner2');

gulp.task('css', function () {

    var combined = combiner.obj([
        gulp.src(['./scss/csstoolkits.scss']),
        sass(),
        concat('ct.css'),
        gulp.dest('./dist/css')
    ]);

    combined.on('error', console.error.bind(console));

    return combined;

});