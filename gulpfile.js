const gulp = require('gulp');

const moveLibs = [
    {from: 'src/**/*', to: 'dist/src'},
    {from: 'README.md', to: 'dist'},
    {from: 'package.json', to: 'dist'}
]

gulp.task('move', function() {
    moveLibs.forEach(({from, to} = {}) => {
        gulp.src(from)
        .pipe(gulp.dest(to))
    })
})


gulp.task('build',  gulp.series('move', function() {
    console.log('build finish')
  }));
  