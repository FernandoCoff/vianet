import gulp from 'gulp'
import dartSass from 'sass'
import gulpSass from 'gulp-sass'
import cleanCSS from 'gulp-clean-css'
import terser from 'gulp-terser'
import htmlmin from 'gulp-htmlmin'

const sass = gulpSass(dartSass)

function compileSass() {
  return gulp.src('src/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
}

function minifyJS() {
  return gulp.src('src/js/**/*.js')
    .pipe(terser())
    .pipe(gulp.dest('dist/js'))
}

function minifyHTML() {
  return gulp.src('src/**/*.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist'))
}

function watchFiles() {
  gulp.watch('src/**/*.html', minifyHTML)
  gulp.watch('src/js/**/*.js', minifyJS)
  gulp.watch('src/scss/**/*.scss', compileSass)
}

export const build = gulp.parallel(minifyHTML, minifyJS, compileSass)
export const watch = gulp.series(build, watchFiles)

export default watch
