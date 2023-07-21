let mix = require('laravel-mix');

mix.js('src/app.js', 'js')
   .sass('src/app.scss', 'css')
   .browserSync({
      files: ['css/*.css', 'js/*.js', 'index.html'],
      server: "./"
   })