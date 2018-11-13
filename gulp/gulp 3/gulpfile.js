
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var useref = require('gulp-useref');
var uglify = require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano = require('gulp-cssnano');
var imagemin = require('gulp-imagemin');
var del = require('del');
var runSequence = require('run-sequence');

//npm init
//npm install gulp --save-dev
//npm install gulp-sass --save-dev
//npm install browser-sync --save-dev
//npm install gulp-useref --save-dev
//npm install gulp-uglify --save-dev 
//npm install gulp-cssnano
//npm install gulp-imagemin --save-dev
//npm install del --save-dev
//npm install run-sequence --save-dev

/*
gulp.task('hello', function() {
	console.log('Hello world');
});
*/

/*
gulp.task('task-name', function () {
  return gulp.src('source-files') // Get source files with gulp.src
    .pipe(aGulpPlugin()) // Sends it through a gulp plugin
    .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
})
*/

/*
gulp.task('sass', function(){
  return gulp.src('app/scss/styles.scss')
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/css'))
});
*/

//for pug
// npm install --save gulp-pug 
var pug = require('gulp-pug');

gulp.task('pug',function() {
 return gulp.src('app/*.jade')
 .pipe(pug({
  doctype: 'html',
  pretty: false
}))
 .pipe(gulp.dest('app'))
 .pipe(browserSync.reload({
  stream: true
  }))
});



// gulp.task('sass', function() {
//   return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
//   .pipe(sass())
//   .pipe(gulp.dest('app/css'))
//   .pipe(browserSync.reload({
//     stream: true
//   }))
// })



//Watching Sass files for changes
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
  	stream: true
  }))
})


//Live-reloading with Browser Sync
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})


//Optimizing CSS and JavaScript files
gulp.task('useref', function(){
  return gulp.src('app/*.html')
    .pipe(useref()) //concat file
    .pipe(gulpIf('*.js', uglify()))  // Minifies only if it's a JavaScript file
    .pipe(gulpIf('*.css', cssnano())) // Minifies only if it's a CSS file
    .pipe(gulp.dest('dist'))
  });


//Optimizing Images
gulp.task('images', function(){
  return gulp.src('app/images/**/*.+(png|jpg|gif|svg)')
  .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
});


//Copying Fonts to Dist
gulp.task('fonts', function() {
  return gulp.src('app/fonts/**/*')
  .pipe(gulp.dest('dist/fonts'))
})


//Cleaning up generated files automatically
gulp.task('clean:dist', function() {
  return del.sync('dist');
})




// Gulp watch syntax
//gulp.watch('files-to-watch', ['tasks', 'to', 'run']); 


gulp.task('watch', ['browserSync','pug', 'sass'], function (){
  gulp.watch('app/**/*.jade', ['pug']); 
  gulp.watch('app/scss/**/*.scss', ['sass']); 
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload); 
  gulp.watch('app/js/**/*.js', browserSync.reload); 
});



gulp.task('build', function (callback) {
  runSequence('clean:dist', 
    ['sass', 'useref', 'images', 'fonts'],
    callback
    )
})



gulp.task('default', function (callback) {
  runSequence(['pug','sass','browserSync', 'watch'],
    callback
    )
})




