# gulp-imagemin

* ������� ���������� ���� PNG, JPEG, GIF � SVG. ��� ��������� (�� ��������������) ������� ����������� ������ ������ ������������ �������� gulp-imagemin

## ���������

* ������������� gulp-imagemin �������� � ������� ����� --save-dev

> $ npm install --save-dev gulp-imagemin

* ���������� ����������

```js
var imagemin = require('gulp-imagemin');
```

* ������� ������ � ����������� � ��� ���������

```js
gulp.task('default', function () {
    return gulp.src('/images/*') - ����� ����� ����������� �� ����� images
        .pipe(imagemin({
            progressive: true, - ��� ����� ��������� ������� ������ ����������� ������          
        }))
        .pipe(gulp.dest('dist/images')); - �������� ������, �� ������ ��������, �� �����, �������� �������
});
```
