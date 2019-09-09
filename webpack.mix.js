const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/coreui/index.js', 'public/coreui/js/app.js')
   .sass('resources/sass/coreui/style.scss', 'public/coreui/css');

mix.react('resources/js/admin/index.js', 'public/admin-assets/js/app.js')
    .sass('resources/sass/admin/style.scss', 'public/admin-assets/css');
