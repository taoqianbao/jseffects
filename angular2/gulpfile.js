/**
 *   nodejs + bowser + npm
 */
var gulp = require('gulp');
var browserSync = require('browser-sync');

//start the server
gulp.task('browser-sync', function() {
	browserSync({
		server: {
			baseDir: "./app"
		}
	});
});

var destVenderJS = "./src/vender/js";
var destVenderCss = "./src/vender/css/";

// copy bower files to vender folder
gulp.task('refBowserComponents', function() {
	
	gulp.src('./node_modules/systemjs/dist/system.js')
		.pipe(gulp.dest(destVenderJS));
	
	
	gulp.src('./node_modules/angular2/bundles/angular2.dev.js')
		.pipe(gulp.dest(destVenderJS));
	
	gulp.src('./node_modules/angular2/bundles/angular2.min.js')
		.pipe(gulp.dest(destVenderJS));
	
	gulp.src('./bower_components/angular/angular.min.js')
		.pipe(gulp.dest(destVenderJS));

	gulp.src('./bower_components/jquery/dist/jquery.min.js')
		.pipe(gulp.dest(destVenderJS));

	gulp.src('./bower_components/jquery/dist/jquery.min.map')
		.pipe(gulp.dest(destVenderJS));

	gulp.src('./bower_components/bootstrap/dist/js/bootstrap.min.js')
		.pipe(gulp.dest(destVenderJS));

	//css
	gulp.src('./bower_components/bootstrap/dist/css/bootstrap.min.css')
		.pipe(gulp.dest(destVenderCss));

	//fonts
	gulp.src('./bower_components/bootstrap/dist/fonts/*')
		.pipe(gulp.dest('./src/vender/fonts'));

});

// Compile SASS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src('./src/sass/*.scss')
		.pipe(sass({
			includePaths: ['scss']
		}))
		.pipe(gulp.dest('./src/styles/style.css'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// Reload all Browsers
gulp.task('bs-reload', function() {
	browserSync.reload();
});

//
var files = [
	'./src/*.html',
	'./src/images/**/*.*',
	'./src/views/**/*.html',
	'./src/scripts/**/*.js',
	'./src/styles/**/*.css'
];

// Watch scss AND html files, doing different things with each.
gulp.task('default', ['browser-sync'], function() {
	gulp.watch("scss/*.scss", ['sass']);
	gulp.watch(files, ['bs-reload']);
});