var gulp = require('gulp');
var rimraf = require('rimraf');
var runSequence = require('run-sequence').use(gulp);
var jade = require('gulp-jade');

gulp.task('jade', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./jade/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('build', function (callback) {
    runSequence('jade');
});