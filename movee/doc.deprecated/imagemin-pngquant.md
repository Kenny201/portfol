# imagemin-pngquant

* 

## ���������

* ������������� imagemin-pngquant �������� � ������� ����� --save

> $ npm install --save imagemin-pngquant

* ���������� ����������

```js
var pngquant = require('imagemin-pngquant')
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
