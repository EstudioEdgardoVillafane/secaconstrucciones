<?php

    include '../class/seca.php';
	include '../class/connect.php';

    $NewConnect = new Seca();
    
    $SQL = "INSERT INTO etiqueta (e_nombre) VALUES ('".$_GET["nombre"]."')";
    $NewConnect->ExecuteSql($SQL);

?>