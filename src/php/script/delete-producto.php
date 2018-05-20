<?php

    include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();   
    $sqld = "UPDATE producto SET p_status = 0 WHERE p_id = '".$_GET["id"]."'";
    $NewConnect->Borrar($sqld);
    $sql = "SELECT * FROM producto WHERE p_status = 1 ORDER BY p_orden ASC";
    $varAux = $NewConnect->CreateJson($sql);
    $NewConnect->SaveJson($varAux);
?>