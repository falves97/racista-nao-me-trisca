FROM dunglas/frankenphp

COPY conf.d/app-configs.ini /usr/local/etc/php/conf.d/app-configs.ini

RUN set -eux; \
	install-php-extensions \
		@composer \
        pdo_pgsql \
		apcu \
		intl \
		opcache \
		zip \
        gd \
	;