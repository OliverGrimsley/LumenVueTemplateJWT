# Lumen - Vue Template with JWT

> This is the template I start with for initializing an application based on a Vue SPA, Vuex with Lumen backend

Template includes my typical Vue dependencies
- axios
- vue-multiselect
- vue-js-modal
- vue-text-mask
- vue-trumbowyg
- vue2-dropzone
- vuejs-datepicker
- tailwindcss
- text-mask-addons
- trumbowyg
- date-fns (I do not use moment)

## Procedure

Clone repo

```
composer install
npm init
npm install
```

## create databse
> not covered here

Change env.example to env, add app secret and JWT secret:

(Neither the JWT package nor Lumen have any console commands to do this as of this version)

```
APP_KEY=______________
JWT_SECRET=________________
```

## create migration and user table

```
php artisan migrate:install
php artisan migrate
```

## run build (and watch)
```npm run watch```

## Test app
Use whatever server you use in dev environment, visit app page.  

### License

[MIT](http://opensource.org/licenses/MIT)