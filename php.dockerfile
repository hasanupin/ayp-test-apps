FROM php:8.1-fpm-alpine
WORKDIR /var/www/html
RUN apk add --no-cache --virtual .build-deps \
        $PHPIZE_DEPS \
        curl-dev \
        libtool \
        libxml2-dev \
        postgresql-dev \
        sqlite-dev \
    && apk add --no-cache \
        curl \
        git \
        mysql-client \
        postgresql-libs \
        libintl \
        icu \
        icu-dev \
        libzip-dev \
        libpng \
        libpng-dev \
        zlib-dev \
    && apk update \
    && docker-php-ext-configure gd \
    && docker-php-ext-install \
        bcmath \
        curl \
        pdo \
        pdo_mysql \
        pdo_pgsql \
        pdo_sqlite \
        pcntl \
        xml \
        zip \
        intl \
        gd \
    && curl -s https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin/ --filename=composer \
    && apk del -f .build-deps