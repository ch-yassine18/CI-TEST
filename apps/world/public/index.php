<?php

require '../vendor/autoload.php';

use Monolog\Logger;

// Logger
$logger = new Logger('default');
$logger->pushHandler(new \Monolog\Handler\ErrorLogHandler());

// Page
$logger->info('Access to index');

echo "World";
