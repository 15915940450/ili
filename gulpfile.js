var gulp=require('gulp');
var imagemin=require('gulp-imagemin');
var htmlmin=require('gulp-htmlmin');
var version='?v=1.5.9';
var htmlReplace=require('gulp-html-replace');

gulp.task('gImagemin',function(){
  gulp.src(['./dist/**/*.png','./dist/**/*.jpg'])
    .pipe(imagemin())
    .pipe(gulp.dest('online/'));
});

gulp.task('gHtmlmin',function(){
  gulp.src(['./dist/index.html'])
    .pipe(htmlReplace({
      script:'bundle.min.js'+version
    }))
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest('online/'));
});


// gulp.task('default',['traditionalized'],function(){
//   console.log('okay.');
// });
