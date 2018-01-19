const gulp =require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const scss = require('gulp-scss');


gulp.task('default', ['scss', 'watch']);

gulp.task('scss', function(){
	gulp.src('./src/assets/scss/**/*.scss')
		.pipe(scss({
			style: "compressed"
		}))
		.pipe(autoprefixer())
		.pipe(gulp.dest("./src/assets/css"));
});

gulp.task('watch', ['scss'], function(){
	gulp.watch('./src/assets/scss/**/*.scss', ['scss'])
});