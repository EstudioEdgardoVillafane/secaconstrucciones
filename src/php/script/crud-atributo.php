<?php
	include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();
	
	if($_GET["data"]==1){                   /** List    */
		$sql="SELECT * FROM atributo WHERE a_status=1 AND a_seccion='".$_GET["atributo"]."'";	
		$NewConnect->CreateJson($sql);
	}elseif($_GET["data"]==2){              /** Delete  */
		$sqld = "UPDATE uso SET u_status = 0 WHERE u_id = '".$_GET["id"]."'";
		$NewConnect->Borrar($sqld);
	}elseif($_GET["data"]==4){
		$sql="UPDATE uso SET
		u_titulo = '".$_GET["titulo"]."',
		u_subtitulo = '".$_GET["subtitulo"]."',
		u_parrafo = '".$_GET["descripcion"]."',
		u_idproducto = '".$_GET["idproducto"]."'
		WHERE u_id = '".$_GET["id"]."'";
		$NewConnect->ExecuteSql($sql);

	}elseif($_GET["data"]==5){
		$sql = "SELECT * FROM uso WHERE u_idproducto = '".$_GET["id"]."' AND u_status=1";
		$NewConnect->CreateJson($sql);
	}

?>