<?php

    include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();   
    $sqld = "UPDATE cliente SET c_status = 0 WHERE c_id = '".$_GET["id"]."'";
    $NewConnect->Borrar($sqld);
?>