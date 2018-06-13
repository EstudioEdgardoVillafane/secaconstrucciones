<?php  
require_once '../class/seca.php';
require_once '../class/connect.php';

$NewConnect = new Seca();

$sql = "SELECT * FROM /*base de datos*/ WHERE /*status1*/";
echo  $NewConnect->CreateJson($sql);

?>