<?php

    include '../class/seca.php';
	include '../class/connect.php';

    $NewConnect = new Seca();
    
    $SQL = "INSERT INTO etiqueta (e_nombre,e_uso) VALUES ('".$_GET["nombre"]."','1')";
    $NewConnect->ExecuteSql($SQL);

?>