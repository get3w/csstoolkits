var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var less = require('gulp-less');
var combiner = require('stream-combiner2');

gulp.task('min', function () {

    var combined = combiner.obj([
        gulp.src(['./less/csstoolkits.less']),
        less(),
        cssmin(),
        concat('ct.min.css'),
        gulp.dest('./dist/css')
    ]);

    combined.on('error', console.error.bind(console));

    return combined;

});