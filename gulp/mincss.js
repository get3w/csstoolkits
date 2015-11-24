var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var combiner = require('stream-combiner2');

gulp.task('mincss', function () {

    var combined = combiner.obj([
        gulp.src(['./dist/css/ct.css']),
        cssmin(),
        concat('ct.min.css'),
        gulp.dest('./dist/css')
    ]);

    combined.on('error', console.error.bind(console));

    return combined;

});