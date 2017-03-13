const gulp = require('gulp');
const source = require('vinyl-source-stream');
const browserify = require('browserify');
const watchify = require('watchify');
const reactify = require('reactify');
const babelify = require('babelify');

const sourcemaps = require('gulp-sourcemaps');
const minify = require('gulp-minify');
const gutil = require('gulp-util');
const nodemon = require('gulp-nodemon');
const sass = require('gulp-sass');
const concat = require('gulp-concat');

let b = browserify({
  entries: ['./src/index.js'],
  cache: {},
  packageCache: {}
});


// gulp tasks
gulp.task('watch:js', bundle);
// gulp.task('css', sassCompile);
gulp.task('serve', serve);

// simple gulp task to start the server
function serve() {
  nodemon({script: 'server/server.js'});
}

// bundling function
function bundle() {
  return b.transform("babelify", {presets: ["es2015", "react"]})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./build'))
}

// function sassCompile() {
//   return gulp.src('./client/scss/application.scss')
//     .pipe(sass())
//     .pipe(concat('styles.css'))
//     .pipe(gulp.dest('./client/stylesheets'))
// }

// gulps default task is to call the serve task
gulp.task('default', ['watch:js', 'serve']);
gulp.watch('./src/index.js', ['watch:js']);
// gulp.watch('./src/index.css', ['css']);

