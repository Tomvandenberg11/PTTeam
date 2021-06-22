const gulp = require('gulp');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');

gulp.task('styles', gulp.series(function() {
  return gulp.src('public/css/*')
    .pipe(postcss(cssnano))
    .pipe(gulp.dest('public/min_css'));
}));

gulp.task('default', gulp.series(function() {
  gulp.watch('public/css/*.css', gulp.registry().get('styles'));
}));
