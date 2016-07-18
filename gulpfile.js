var gulp = require('gulp');
var imagemin = require('gulp-imagemin');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var concat = require('gulp-concat');

//Minify images process
gulp.task('imagemin',function(){

	gulp.src('src/images/**/*')
	.pipe(imagemin())
	.pipe(gulp.dest('build/images'));

});

gulp.task('styles',function(){
	gulp.src(['src/styles/*.css'])
	.pipe(concat('styles.css'))
	.pipe(autoprefix('last 2 versions'))
	.pipe(minifyCSS())
	.pipe(gulp.dest('build/styles/'))
});

gulp.task('default',['imagemin','styles'],function(){
	gulp.watch('src/styles/*.css',function(){
		gulp.run('styles');
	});
});
