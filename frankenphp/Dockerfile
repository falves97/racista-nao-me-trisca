FROM dunglas/frankenphp

COPY conf.d/memory.ini /usr/local/etc/php/conf.d/memory.ini

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