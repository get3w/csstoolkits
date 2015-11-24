var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var jshint = require('gulp-jshint');

gulp.task('js', function() {
    return gulp.src('./js/*.js')
        .pipe(concat('js.js'))
        .pipe(gulp.dest('dist/js'))
});
