const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
const runSequence = require('run-sequence');
const webpack = require('webpack-stream');
 
gulp.task('default', (cb) => {
  runSequence(
    'build',
    'copyIndex',
    'server',
    cb);
});
 
gulp.task('server', function () {
  nodemon({
    script: 'app.js'
  })
})

gulp.task('copyIndex', function () {
  return gulp.src('./index.html')
    .pipe(gulp.dest('./dist/'));
});

gulp.task('build', function() {
  return gulp.src('./src/index.js')
    .pipe(webpack(require('./webpack.config.js')))
    .pipe(gulp.dest('./dist/'));
});