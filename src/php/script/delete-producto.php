<?php

    include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();   
    $sqld = "UPDATE producto SET p_status = 0 WHERE p_id = '".$_GET["id"]."'";
    $NewConnect->Borrar($sqld);

?>