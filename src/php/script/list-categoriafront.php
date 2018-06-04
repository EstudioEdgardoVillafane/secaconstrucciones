<?php 

    include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();


    $sql = "SELECT * FROM seccion, atributo WHERE s_status = 1 AND s_id = a_seccion";
    echo    $NewConnect->CreateJson($sql);

?>