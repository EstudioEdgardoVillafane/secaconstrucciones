<?php 

    include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();


    $sql = "SELECT * FROM preguntas, producto WHERE pr_status = 1 AND pr_producto = p_id";
    echo  $NewConnect->CreateJson($sql);

?>