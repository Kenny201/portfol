# gulp-uglify

* ������ ������ ������ ��� ����������� js-������ - �� ������� �������, �������, ����� � �������. � ���������� js-���� ���������� ������� �� �������.

## ���������

* ������������� gulp-uglify �������� � ������� ����� --save-dev

> $ npm install --save-dev gulp-uglify

* ���������� ����������

```js
var uglify = require('gulp-uglify');
```

* ������� ������ � ����������� � ��� ���������

```js
gulp.task('compress', function() {
  return gulp.src('lib/*.js') - ����� ��� ����� � ����������� .js
    .pipe(uglify()) - ������������ ��
    .pipe(gulp.dest('/js/')); - � ������� � ���������� js
});
```
