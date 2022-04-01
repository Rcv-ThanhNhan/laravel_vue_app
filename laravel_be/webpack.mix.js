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

mix.js('resources/js/main.js', 'public/js/main.js')
    .js('resources/js/api/customer.js', 'public/js/api/customer.js')
    .js('resources/js/api/login.js', 'public/js/api/login.js')
    .js('resources/js/api/product.js', 'public/js/api/product.js')
    .js('resources/js/api/order.js', 'public/js/api/order.js')
    .js('resources/js/api/user.js', 'public/js/api/user.js')
    .js('resources/js/api/order_detail.js', 'public/js/api/order_detail.js')
    .version()
    .disableNotifications();
// .sass('resources/sass/app.scss', 'public/css');