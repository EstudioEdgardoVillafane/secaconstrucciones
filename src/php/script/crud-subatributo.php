<?php
	include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();
	
	if($_GET["data"]==1){                   /** List   */
		$sql="SELECT * FROM subatributo WHERE sa_status=1";	
		$NewConnect->CreateJson($sql);
	}elseif($_GET["data"]==2){              /** Delete  */
		$sqld = "UPDATE subatributo SET sa_status = 0 WHERE sa_id = '".$_GET["sa_id"]."'";
		$NewConnect->Borrar($sqld);		
	}elseif($_GET["data"]==3){				/** Store */
		$sql = "INSERT INTO subatributo (sa_nombre,sa_idatributo,sa_status) 
		VALUES ('".$_GET["sa_name"]."','".$_GET["sa_idattribute"]."','1')";
		$NewConnect->ExecuteSql($sql);
	}elseif($_GET["data"]==4){  			/** Edit */
		$sql="UPDATE subatributo SET
        sa_nombre = '".$_GET["sa_name"]."',
        sa_idatributo = '".$_GET["sa_idattribute"]."' 
		WHERE sa_id = '".$_GET["sa_id"]."'";
		$NewConnect->ExecuteSql($sql);
	}

?>