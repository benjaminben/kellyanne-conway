var gulp = require('gulp')
var sass = require('gulp-sass')

gulp.task('styles', function() {
  gulp.src('./css/sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'))
})

gulp.task('default', function() {
  gulp.watch('./css/sass/**/*.scss',['styles'])
})
