var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var cssmin = require('gulp-cssmin');
var less = require('gulp-less');
var combiner = require('stream-combiner2');

gulp.task('less', function () {

    var combined = combiner.obj([
        gulp.src(['./less/index.less']),
        less(),
        concat('ct.css'),
        gulp.dest('./css')
    ]);

    combined.on('error', console.error.bind(console));

    return combined;

});