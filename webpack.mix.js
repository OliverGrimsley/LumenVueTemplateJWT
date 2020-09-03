let mix = require('laravel-mix')
require('laravel-mix-tailwind')

mix.options({
  imgLoaderOptions: {
    enabled: false,
  },
})

mix.js('resources/js/app.js', 'public/js').version()

mix
  .sass('resources/sass/tailwind.scss', 'public/css')
  .tailwind()
  .version()
