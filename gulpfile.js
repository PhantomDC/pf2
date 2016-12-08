var gulp = require('gulp');var gulpSass = require('gulp-sass');var autoprefixer = require("gulp-autoprefixer");var browserSync = require('browser-sync').create();var useref = require('gulp-useref');var uglify = require('gulp-uglify');var gulpIf = require('gulp-if');var cssnano = require('gulp-cssnano');var imagemin = require('gulp-imagemin');var cache = require('gulp-cache');var del = require('del');var runSequence = require('run-sequence');/* DEVELOPMENT TASKS */gulp.task('sass', function () {    return gulp.src('scss/app.scss')        .pipe(gulpSass())        .on('error', onError)        .pipe(autoprefixer({            browsers: ['last 2 versions', 'ie >= 9']        }))        .pipe(gulp.dest('css'))        .pipe(browserSync.reload({            stream: true        }))});function onError(err) {    console.log(err);    this.emit('end');}gulp.task('browser sync', function () {    browserSync.init({        server: {            baseDir: './'        }    })});gulp.task('run', ['sass', 'browser sync'], function () {    gulp.watch('scss/**/*.scss', ['sass']);    gulp.watch('*.html', browserSync.reload);    gulp.watch('js/**/*.js', browserSync.reload);});/* BUILD TASKS */gulp.task('useref', function () {    return gulp.src('*.html')        .pipe(useref())        .pipe(gulpIf('*.js', uglify()))        .pipe(gulpIf('*.css', cssnano()))        .pipe(gulp.dest('dist'))});gulp.task('images', function () {    return gulp.src('img/**/*.+(png|jpg|gif|svg)')        .pipe(imagemin())        //.pipe(cache(imagemin()))        .pipe(gulp.dest('dist/img'))});/*gulp.task('cache:clear', function (callback) { return cache.clearAll(callback) });*/gulp.task('fonts', function () {    return gulp.src('fonts/**/*')        .pipe(gulp.dest('dist/fonts'))});gulp.task('clean:dist', function () {    return del.sync('dist');});gulp.task('build', function (callback) {    runSequence('clean:dist', ['sass'], ['useref'], ['images', 'fonts'], callback)});