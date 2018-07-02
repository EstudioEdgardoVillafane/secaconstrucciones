<?php
	include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();
	// if($_GET["data"]==1){                   /** List   */
	// 	// $sql="SELECT * FROM subatributo WHERE sa_status=1 A";	
	// 	// $NewConnect->CreateJson($sql);
	// }else

	if($_GET["data"]==1){                   /** List    */
		$sql="SELECT * FROM subatributo, atributo WHERE su_status = 1 AND a_id= su_atributo ";	
		echo $NewConnect->CreateJson($sql);
	}elseif($_GET["data"]==2){              /** Delete  */
		$sqld = "UPDATE subatributo SET su_status = 0 WHERE su_id = '".$_GET["sa_id"]."'";
		$NewConnect->Borrar($sqld);
	}elseif($_GET["data"]==3){				/** Store */

		echo $su_nombre = $_GET["su_nombre"];
		$su_nombre = str_replace(" ","-",$su_nombre);
		$su_nombre = str_replace("ñ","n",$su_nombre);
		$su_nombre = str_replace("á","a",$su_nombre);
		$su_nombre = str_replace("é","e",$su_nombre);
		$su_nombre = str_replace("í","i",$su_nombre);
		$su_nombre = str_replace("ó","o",$su_nombre);
		$su_nombre = str_replace("ú","u",$su_nombre);
		
		$sql = "INSERT INTO subatributo (su_nombre,su_atributo,su_status) 
		VALUES ('".$sa_nombre."','".$_GET["sa_atributo"]."','1')";
		$NewConnect->ExecuteSql($sql);
	}elseif($_GET["data"]==4){ 				/** Edit */
		$sql="UPDATE subatributo SET
		su_nombre = '".$_GET["sa_nombre"]."',
		su_atributo = '".$_GET["sa_atributo"]."'
		WHERE su_id = '".$_GET["sa_id"]."'";
		$NewConnect->ExecuteSql($sql);
	}
	if($_GET["data"]==6){
		$sql="SELECT * FROM subatributo WHERE su_status = 1 AND su_atributo ='".$_GET["sa_atributo"]."'";	
		echo $NewConnect->CreateJson($sql);
	}
?>