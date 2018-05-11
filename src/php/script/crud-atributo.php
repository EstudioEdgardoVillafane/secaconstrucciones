<?php
	include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();
	

//	if($_GET["data"]==1){                   /** List   */
	//	$sql="SELECT * FROM atributo WHERE a_status=1";	

	if($_GET["data"]==1){                   /** List    */
		$sql="SELECT * FROM atributo WHERE a_status=1 AND a_seccion='".$_GET["atributo"]."'";	

		$NewConnect->CreateJson($sql);
	}elseif($_GET["data"]==2){              /** Delete  */
		$sqld = "UPDATE atributo SET a_status = 0 WHERE a_id = '".$_GET["a_id"]."'";
		$NewConnect->Borrar($sqld);		
	}elseif($_GET["data"]==3){				/** Store */
		$sql = "INSERT INTO atributo (a_nombre,a_seccion,a_subatributo,a_status) 
		VALUES ('".$_GET["a_nombre"]."','".$_GET["a_seccion"]."','".$_GET["a_atributo"]."','1')";
		$NewConnect->ExecuteSql($sql);
	}elseif($_GET["data"]==4){  			/** Edit */
		$sql="UPDATE atributo SET
        a_nombre = '".$_GET["a_nombre"]."',
		a_seccion = '".$_GET["a_seccion"]."',
		a_subatributo = '".$_GET["a_subatributo"]."' 
		WHERE a_id = '".$_GET["a_id"]."'";
		$NewConnect->ExecuteSql($sql);
	}

?>