var gulp  = require('gulp');
var $ = require('gulp-load-plugins');
var open = require('open');
var app = {
 srcPath:  'src/',
 devPath:  'bulid/',
 prdPath:  'dist/'
};

gulp.task('src',function(){
 gulp.src('bower_components/**/*.js')
 .pipe( gulp.dest(app.devPath +'v'))
 .pipe( gulp.dest(app.prdPath +'v'))
})
