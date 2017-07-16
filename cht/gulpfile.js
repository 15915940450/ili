var gulp=require('gulp');

var traditionalized=require('./fplugin/traditionalized.js');


gulp.task('traditionalized',function(){
  gulp.src('./index.html')
      .pipe(traditionalized())
      .pipe(gulp.dest('dist/'));
});


gulp.task('css',function(){
  gulp.src(['css/*.css'])
      .pipe(gulp.dest('dist/css/'));
});


gulp.task('img',function(){
  gulp.src(['img/**/*'])
      .pipe(gulp.dest('dist/img/'));
});


gulp.task('js',function(){
  gulp.src(['js/**/*.js'])
      .pipe(traditionalized())
      .pipe(gulp.dest('dist/js/'));
});

gulp.task('default',['traditionalized','css','img','js'],function(){
  console.log('default');
});
