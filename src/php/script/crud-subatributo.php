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
		$NewConnect->CreateJson($sql);
	}elseif($_GET["data"]==2){              /** Delete  */
		$sqld = "UPDATE subatributo SET su_status = 0 WHERE su_id = '".$_GET["sa_id"]."'";
		$NewConnect->Borrar($sqld);
	}elseif($_GET["data"]==3){				/** Store */
		$sql = "INSERT INTO subatributo (su_nombre,su_atributo,su_status) 
		VALUES ('".$_GET["sa_nombre"]."','".$_GET["sa_atributo"]."','1')";
		$NewConnect->ExecuteSql($sql);
	}elseif($_GET["data"]==4){ 				/** Edit */
		$sql="UPDATE subatributo SET
		su_nombre = '".$_GET["sa_nombre"]."',
		su_atributo = '".$_GET["sa_atributo"]."'
		WHERE su_id = '".$_GET["sa_id"]."'";
		$NewConnect->ExecuteSql($sql);

	}

?>