<?php

    include '../class/seca.php';
	include '../class/connect.php';

    $NewConnect = new Seca();
    $nombre=$_GET["nombre"];
    $nombre = str_replace(" ","-",$nombre);
    $nombre = str_replace("ñ","n",$nombre);
    $nombre = str_replace("á","a",$nombre);
    $nombre = str_replace("é","e",$nombre);
    $nombre = str_replace("í","i",$nombre);
    $nombre = str_replace("ó","o",$nombre);
    $nombre = str_replace("ú","u",$nombre);
  
    
    $SQL = "INSERT INTO etiqueta (e_nombre,e_uso) VALUES ('".$nombre."','1')";
    $NewConnect->ExecuteSql($SQL);

?>