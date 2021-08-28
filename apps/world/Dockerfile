FROM php:7.4-cli

RUN apt-get update \
    # install GraphicsMagick
	&& apt-get install -y \
		libgraphicsmagick1-dev graphicsmagick zlib1g-dev libicu-dev gcc g++ --no-install-recommends zip unzip \
	&& pecl -vvv install gmagick-beta && docker-php-ext-enable gmagick \
    # pdo_mysql
    && docker-php-ext-install pdo_mysql \
    # redis
    && pecl install redis && docker-php-ext-enable redis \
	# intl
	&& docker-php-ext-configure intl && docker-php-ext-install intl \
    # cleanup
    && apt-get clean && rm -rf /var/lib/apt/lists/*

WORKDIR /var/www/html
EXPOSE 3000
COPY --from=composer:latest /usr/bin/composer /usr/local/bin/composer
# copy everything in the project into the container. This is what
# makes this image so fast!
COPY . .
RUN chmod +x public
RUN composer install
# start the dev server
#CMD [ "./flow", "server:run", "--host", "0.0.0.0" ]
CMD composer run dev:start 