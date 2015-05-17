var gulp = require('gulp');
var rimraf = require('rimraf');
var runSequence = require('run-sequence').use(gulp);
var jade = require('gulp-jade');

gulp.task('delete', function (cb) {
    return rimraf('./www', cb);
});
 
gulp.task('jade', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./docs/jade/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./docs/'));
});

gulp.task('docs', function (callback) {
    runSequence('delete', 'jade');
});