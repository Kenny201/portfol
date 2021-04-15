"use strict";

const { params, plugins: $ } = require("./variables");

module.exports = () =>
    $.gulp.src("node_modules/jquery/dist/jquery.min.js")
        .pipe($.gulp.dest(`${params.out}/js`))
        .pipe($.gulp.dest(`${params.prod}/js`));
