var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var plumber = require('gulp-plumber');
var autoprefixer = require('gulp-autoprefixer');
var sass = require('gulp-sass');

function css() {
  gulp.src('./scss/csstoolkits.scss')
      .pipe(plumber())
      .pipe(sass())
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
      .pipe(concat('ct.css'))
      .pipe(gulp.dest('./'));
}

function cssmin() {
  gulp.src('./ct.css')
      .pipe(csso())
      .pipe(concat('ct.min.css'))
      .pipe(gulp.dest('./'))
}

function js() {
  gulp.src('./js/*.js')
      .pipe(concat('ct.js'))
      .pipe(gulp.dest('./'))
}

function jsmin() {
  gulp.src('./ct.js')
      .pipe(uglify())
      .pipe(concat('ct.min.js'))
      .pipe(gulp.dest('./'))
}

gulp.task('all', function () {
  css();
  cssmin();
  js();
  jsmin();
});
