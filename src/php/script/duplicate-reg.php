<?php
	include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();

    $Nombre = $_GET["nombre"]."(duplicado)";
    /** Store */
	$sql = "INSERT INTO producto (p_nombre,p_section,p_atributo,p_subatributo,p_url,p_precio,p_descripcion,p_status) 
    VALUES ('".$Nombre."','".$_GET["seccion"]."','".$_GET["atributo"]."', '".$_GET["subatributo"]."', '".$_GET["foto"]."', '".$_GET["precio"]."','".$_GET["desc"]."','1')";
    
    $NewConnect->ExecuteSql($sql);
    $sql = "SELECT * FROM producto WHERE p_status = 1 ORDER BY p_orden ASC";
		 $varAux = $NewConnect->CreateJson($sql);
		 $NewConnect->SaveJson($varAux);
?>