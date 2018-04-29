var gulp = require("gulp");
var imagemin = require("gulp-imagemin");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");
var cleanCSS = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");

  // ---Gulp top level functions---
  // gulp.task = define task
  // gulp.src = poin to the file to use
  // gulp.dest = poin to the folder to output
  // gulp.watch = watch files and folder for changes

// Logs message
gulp.task("message", function(){
  return console.log("gulp is running");
});

// Copy all HTML files
gulp.task("copyHTML", function(){
  gulp.src("src/*.html")
    .pipe(gulp.dest("app"));
});

// Optimize images
gulp.task('imagemin', () =>
	gulp.src('src/assets/img/*')
		.pipe(imagemin())
		.pipe(gulp.dest('app/assets/img'))
);

// Clean CSS
gulp.task("minify-css", () => {
  return gulp.src("src/assets/css/*.css")
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest("app/assets/css"))
});

// Css autoprefixer
gulp.task('autoprefixer', () =>
   gulp.src('src/assets/css/*.css')
      .pipe(concat('bundle.css'))
      .pipe(cleanCSS({compatibility: 'ie8'}))
      .pipe(autoprefixer({
           browsers: ['last 2 versions'],
           cascade: false
       }))
       .pipe(gulp.dest('app/assets/css'))
);

// Minify js
gulp.task("minify", function(){
  gulp.src("src/assets/js/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("app/assets/js"))
});

// Scripts
gulp.task("scripts", function(){
  gulp.src("src/assets/js/*.js")
    .pipe(concat("main.js"))
    .pipe(uglify())
    .pipe(gulp.dest("app/assets/js"))
});

// Run all the functions
gulp.task("default", ["message", "copyHTML", "imagemin", "scripts", "autoprefixer"]);

// watch
gulp.task("watch", function(){
  gulp.watch("src/*.html", ["copyHTML"]);
  gulp.watch('src/assets/img/*', ["imagemin"]);
  gulp.watch("src/assets/js/*.js", ["scripts"]);
  gulp.watch("src/assets/css/*.css", ["autoprefixer"]);
});
