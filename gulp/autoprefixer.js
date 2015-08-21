var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('autoprefixer', function () {
    gulp.src('./dist/css/ct.css')
        .pipe(autoprefixer({
            browsers: [
                '> 1%',
                'last 2 versions',
                'Android 2.3',
                'Android >= 4',
                'Chrome >= 20',
                'Firefox >= 24',
                'Explorer >= 8',
                'iOS >= 6',
                'Opera >= 12',
                'Safari >= 6'
            ],
            cascade: true,
            remove: true
        }))
        .pipe(gulp.dest('dist/css'));
});