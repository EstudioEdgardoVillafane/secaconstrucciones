<?php

	include '../class/seca.php';
	include '../class/connect.php';

    $NewConnect = new Seca();

    $conex = file_get_contents("php://input");
    $Object = json_decode($conex);
    
    $sql = "UPDATE preguntas SET pr_status = 0 WHERE pr_id = '".$Object."'";
    $NewConnect->ExecuteSql($sql);

?>