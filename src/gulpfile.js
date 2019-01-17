const nib = require('nib')
const babel = require('gulp-babel')
const stylus = require('gulp-stylus')
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const minifyCSS = require('gulp-csso')
const { src, dest, parallel } = require('gulp')

function style() {
  return src('style.styl')
    .pipe(stylus({
      use: [nib()]
    }))
    .pipe(minifyCSS())
    .pipe(rename('style.min.css'))
    .pipe(dest('../dist'))
}

function script() {
  return src('script.js')
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(rename('script.min.js'))
    .pipe(dest('../dist'))
}

exports.script = script
exports.style = style
exports.default = parallel(style, script)
