var gulp         = require('gulp')
var sass         = require('gulp-sass')
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');

gulp.task('styles', function() {
  gulp.src('./css/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(sourcemaps.init())
      .pipe(postcss([ autoprefixer() ]))
      .pipe(sourcemaps.write('.'))
      .pipe(gulp.dest('./css'))
})

gulp.task('default', function() {
  gulp.watch('./css/sass/**/*.scss',['styles'])
})
