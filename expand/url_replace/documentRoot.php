<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: X-Requested-With');
header('Access-Control-Max-Age: 86400');

$dirs = $_SERVER["REMOTE_ADDR"];
$files = $_SERVER["DOCUMENT_ROOT"];
$hostname = gethostbyaddr($_SERVER['REMOTE_ADDR']);

$xml = "<?xml version='1.0' encoding='UTF-8'?>";
$xml .= "<root>";
$xml .= "<dir>$dirs</dir>";
$xml .= "<url>$files</url>";
$xml .= "<hostName>$hostname</hostName>";
$xml .= "</root>";
header('Content-type: text/xml');
echo $xml;

?>