var requireDir = require('require-dir');
var gulp = require('gulp');

requireDir('./gulp', { recurse: true });
gulp.task('def', [
    'css',
    'mincss',
    'js',
    'minjs'
]);