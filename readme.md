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

I also use laravel-mix, and this template includes the helper for using `.version()` inside the project.

## Procedure

Clone repo

```
composer install
npm init
npm install
```

## create empty databse
> not covered here

Change `env.example` to `.env`, add app secret and JWT secret:

(Neither the JWT package nor Lumen have any console commands to do this as of this version, even though the documentation suggests JWT does)

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
Use whatever server you use in dev environment, visit app page.  The app will present a single screen to initialize app with an initial user

## To do
- Incorporate Password resets
- install basic admin dashboard
- install Bouncer or Spatie role/responsibility system and hook to User login

## License

[MIT](http://opensource.org/licenses/MIT)