var gulp = require('gulp');
var rimraf = require('rimraf');
var runSequence = require('run-sequence').use(gulp);
var jade = require('gulp-jade');

gulp.task('delete', function (cb) {
    return rimraf('./www', cb);
});
 
gulp.task('build', function() {
  var YOUR_LOCALS = {};
 
  gulp.src('./jade/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest('./www/'))
});

gulp.task('copy', function () {
    gulp.src(['./jade/css/**/*'])
        .pipe(gulp.dest('./www/css'));
        
    gulp.src(['./jade/images/**/*'])
        .pipe(gulp.dest('./www/images'));
});

gulp.task('jade', function (callback) {
    runSequence('delete', 'build', 'copy');
});