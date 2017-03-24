var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
    gulp.src('blocks/**/*.js')
        .pipe(concat('index.js'))
        .pipe(gulp.dest('bundles'));

    gulp.src('blocks/**/*.css')
        .pipe(concat('index.css'))
        .pipe(gulp.dest('bundles'));
});
