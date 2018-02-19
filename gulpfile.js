var gulp = require('gulp');
var concat = require("gulp-concat");
var concatCss = require('gulp-concat-css');
var sass = require('gulp-sass');

gulp.task('js',function() {
 return gulp.src([
                 "./bower_components/jquery/dist/jquery.min.js",
                 "./bower_components/bootstrap/dist/js/bootstrap.min.js",
                 "./assets/js/main.js"

                 ])
 			.pipe(concat("final.js"))
 			.pipe(gulp.dest("./assets/js/"));
});


gulp.task('css', function () {
  return gulp.src([
                  './bower_components/bootstrap/dist/css/bootstrap.min.css',
                  './bower_components/font-awesome/css/font-awesome.css',
                  './assets/css/frontend.css'
                  ])
    .pipe(concatCss("final.css",{rebaseUrls:false}))
    .pipe(gulp.dest('./assets/css/'));
});

gulp.task('fonts', function() {
    return gulp.src([
                    './bower_components/font-awesome/fonts/fontawesome-webfont.*',
                    './bower_components/font-awesome/fonts/FontAwesome.otf',
                    './bower_components/bootstrap/fonts/glyphicons-halflings-regular.*'
                    ])
            .pipe(gulp.dest('./assets/fonts/'));


});

gulp.task('sass', function () {
    return gulp.src('assets/frontend.sass')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./assets/css'));
});




gulp.task('default', ['js','sass','fonts','css'])
gulp.task('watch', function(){
  gulp.watch('./assets/js/main.js', ['js']);
  gulp.watch('./assets/css/frontend.css', ['css']);
    gulp.watch('./assets/frontend.sass', ['sass']);
  // Other watchers
})
