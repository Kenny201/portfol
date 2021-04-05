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
    return gulp.src(['node_modules/jquery/dist/jquery.min.js',
                    'node_modules/slick-carousel-latest/slick/slick.min.js',
                    'node_modules/bootstrap/dist/js/bootstrap.min.js',
                    'node_modules/jquery-validation/dist/jquery.validate.min.js',
                    'node_modules/jquery.maskedinput/src/jquery.maskedinput.js'

                ])
        .pipe(gulp.dest('./js/'))
        .pipe(browserSync.reload({
            stream: true
        }));
});
gulp.task('styles', function() {
    return gulp.src("./sass/**/*.+(scss|sass)")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({suffix: '.min', prefix: ''}))
        .pipe(autoprefixer({
            overrideBrowserslist:['last 2 versions'],
            cascade:false
            }
        ))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
});
gulp.task('pug', function(){
    return gulp.src('./pug/**/*.pug')
        .pipe(plumber())
        .pipe(pugLinter({reporter:'default'})) 
        .pipe(pug())
        .pipe(bemValidator())
        .pipe(gulp.dest('./'))
        .pipe(browserSync.stream());
});
gulp.task('watch', function() {
    gulp.watch("./sass/**/*.+(scss|sass)", gulp.parallel('styles')),
    gulp.watch("./blocks/**/*.pug", gulp.parallel('pug')),
    gulp.watch("./pug/**/*.pug", gulp.parallel('pug'));
});
gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./"
           
        }
       
    });
});
gulp.task('default', gulp.parallel('watch', 'scripts','pug', 'server', 'styles'));