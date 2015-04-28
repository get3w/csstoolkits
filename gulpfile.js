var requireDir = require('require-dir');

requireDir('./gulp', { recurse: true });

var gulp = require('gulp');
gulp.task('default', ['less']);