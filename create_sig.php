#!/usr/bin/env php
<?php

file_put_contents('test.txt', $argv[1]);
$time = time();
openssl_private_encrypt("$time|" . $argv[1], $signature, file_get_contents('private.key'));
$signature = base64_encode($signature);

echo $signature;
