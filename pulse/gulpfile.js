const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass        = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const pug = require("gulp-pug");
const plumber = require("gulp-plumber");
const pugLinter = require("gulp-pug-linter");
const bemValidator = require("gulp-html-bem-validator");

gulp.task('scripts', () => {
    return gulp.src(['../src/node_modules/jquery/dist/jquery.min.js',
                    '../src/node_modules/slick-carousel-latest/slick/slick.min.js',
                    '../src/node_modules/bootstrap/dist/js/bootstrap.min.js',
                    '../src/node_modules/jquery-validation/dist/jquery.validate.min.js',
                    '../src/node_modules/jquery.maskedinput/src/jquery.maskedinput.js'

                ])
        .pipe(gulp.dest('../src/js/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('styles', function() {
    return gulp.src("../src/sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer({
            overrideBrowserslist:['last 2 versions'],
            cascade:false
            }
        ))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("../src/css"))
        .pipe(browserSync.stream());
});
gulp.task('pug', function(){
    return gulp.src('../src/pug/**/*.pug')
        .pipe(plumber())
        .pipe(pugLinter({reporter:'default'})) 
        .pipe(pug())
        .pipe(bemValidator())
        .pipe(gulp.dest('../src'))
        .pipe(browserSync.stream());
});
gulp.task('watch', function() {
    gulp.watch("../src/sass/**/*.+(scss|sass)", gulp.parallel('styles')),
    gulp.watch("../src/blocks/**/*.pug", gulp.parallel('pug')),
    gulp.watch("../src/pug/**/*.pug", gulp.parallel('pug'));
});
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "../src"
           
        }
       
    });
});
gulp.task('default', gulp.parallel('watch', 'scripts','pug', 'server', 'styles'));