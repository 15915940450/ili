var gulp=require('gulp');
var imagemin=require('gulp-imagemin');
var htmlmin=require('gulp-htmlmin');
var version='?v=2.0.0';
var htmlReplace=require('gulp-html-replace');
var uglify=require('gulp-uglify');
var pump=require('pump');
var rename=require('gulp-rename');

gulp.task('gImagemin',function(){
  gulp.src(['./dist/**/*.png','./dist/**/*.jpg'])
    .pipe(imagemin())
    .pipe(gulp.dest('online/'));
});

gulp.task('gHtmlmin',function(){
  gulp.src(['./dist/*.html'])
    .pipe(htmlReplace({
      script:'bundle.min.js'+version
    }))
    .pipe(htmlmin({collapseWhitespace:true}))
    .pipe(gulp.dest('online/'));
});

gulp.task('copy',function(){
  gulp.src(['./dist/files_for_download/*'])
    .pipe(gulp.dest('online/files_for_download/'));
});

gulp.task('gUglify',function(cb){
  pump(
    [
      gulp.src(['./dist/bundle.js']),
      uglify(),
      rename('bundle.min.js'),
      gulp.dest('online/')
    ],
    cb
  );
});


gulp.task('default',['gImagemin','gHtmlmin','copy','gUglify'],function(){
  console.log('okay.');
});
