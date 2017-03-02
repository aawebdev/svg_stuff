///////////////////////////
/// Required
//////////////////////////

var gulp = require('gulp'),
	bs = require('browser-sync').create();

///////////////////////////
/// BrowserSync Tasks
//////////////////////////
gulp.task('sync',function(){
	bs.init({
		server: "./"
	})
	bs.watch('*.html').on('change', bs.reload);
	bs.watch('css/*.css').on('change', bs.reload);
})

///////////////////////////
/// Default Task
//////////////////////////
gulp.task('default',['sync']);