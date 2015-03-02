// include the required packages. 
var gulp = require('gulp');
var stylus = require('gulp-stylus');

// Options compress 
gulp.task('stylus', function () {
  gulp.src('./app/css/stylus/main.styl')
    .pipe(stylus({
      compress: true
    }))
    .pipe(gulp.dest('./app/css/'));
});

// Default gulp task to run 
gulp.task('default', ['stylus']);