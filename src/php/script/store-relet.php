<?php

    include '../class/seca.php';
	include '../class/connect.php';

    $NewConnect = new Seca();
    
    echo $SQL = "INSERT INTO relacionetiqueta (re_producto,re_etiqueta) VALUES ('".$IDProducto."',1)";
    $NewConnect->ExecuteSql($SQL);

?>