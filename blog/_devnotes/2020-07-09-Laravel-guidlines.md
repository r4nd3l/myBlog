---
layout: post
title: "Laravel guidelines"
description: "Useful commands and tips to use Laravel via terminal"
tags: [ Linux , localhost , Laravel, composer ]
---

## Laravel guidelines

### Laravel installation
#### Windows
- Install composer
- Install Laravel with composer command 
> $ composer create-project --prefer-dist laravel/laravel blog

(create-project is the name of the project)

---

### Useful commands

(Generating optimized class loader)
> php artisan optimize

> php artisan --version

> composer require laravel/ui

> composer clear cache

> composer selfupdate

> composer dumpautoload

> composer install (vendor folder)

> composer update --with-dependencies

> composer update --with-dependencies "^6.18"

> composer update laravel/laravel -v

> composer require lararvel/framework

##### Manually raise the version in composer.json
##### As a compare use the desired laravel version's composer.json file as a sample
> composer update

---

### Update Laravel (update, not upgrade)
> composer update