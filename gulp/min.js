var gulp = require('gulp');
var concat = require('gulp-concat');
var cssmin = require('gulp-cssmin');
var combiner = require('stream-combiner2');

gulp.task('min', function () {

    var combined = combiner.obj([
        gulp.src(['./dist/css/ct.css']),
        cssmin(),
        concat('ct.min.css'),
        gulp.dest('./dist/css')
    ]);

    combined.on('error', console.error.bind(console));

    return combined;

});