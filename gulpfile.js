var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var minify = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');

var src= './app/src';
var prod= './app/prod';


gulp.task('css', function() {
 return gulp.src(src + '/sass/app.scss')
   .pipe(sass().on('error', sass.logError))
   .pipe(autoprefixer())
   .pipe(rename({
     suffix: '.min'
   }))
  //  .pipe(minify())
   .pipe(gulp.dest(prod + '/css/'))
   .pipe(notify({ message: 'Tâche accomplie bravo juju !' }));
});


gulp.task('default', function () {
 gulp.watch(src + '/sass/**/*.scss', ['css']);
});
