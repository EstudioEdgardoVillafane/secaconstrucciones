<?php

	include '../class/seca.php';
	include '../class/connect.php';

    $NewConnect = new Seca();
    $sql = "UPDATE producto SET p_orden = '".$_GET["orden"]."' WHERE p_id = '".$_GET["id"]."'";
    $NewConnect->ExecuteSql($sql);
    $sql = "SELECT * FROM producto WHERE p_status = 1 ORDER BY p_orden ASC";
		 $varAux = $NewConnect->CreateJson($sql);
		 $NewConnect->SaveJson($varAux);
?>