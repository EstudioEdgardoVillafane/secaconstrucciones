<?php

    include '../class/seca.php';
	include '../class/connect.php';

    $NewConnect = new Seca();
    
    $IDProducto = $_GET["rl_producto"];
    $IDEtiqueta = $_GET["rl_etiqueta"];

    echo $SQL = "INSERT INTO relacionetiqueta (re_idproducto,re_etiqueta) VALUES ('".$IDProducto."','".$IDEtiqueta."')";
    $NewConnect->ExecuteSql($SQL);

?>