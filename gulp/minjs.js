var gulp = require('gulp');
var watch = require('gulp-watch');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');

gulp.task('minjs', function() {
    return gulp.src('./js/*.js')
        .pipe(concat('ct.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
});
