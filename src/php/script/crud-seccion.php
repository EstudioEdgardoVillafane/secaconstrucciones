<?php
	include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();
	
	if($_GET["data"]==1){                   /** List   */
		$sql="SELECT * FROM seccion WHERE s_status=1";	//falta el atributo
		$NewConnect->CreateJson($sql);
	}elseif($_GET["data"]==2){              /** Delete  */
		$sqld = "UPDATE seccion SET s_status = 0 WHERE s_id = '".$_GET["s_id"]."'";
		$NewConnect->Borrar($sqld);		
	}elseif($_GET["data"]==3){				/** Store */
		$sql = "INSERT INTO seccion (s_nombre,s_status) 
		VALUES ('".$_GET["s_name"]."','1')";
		$NewConnect->ExecuteSql($sql);
	}elseif($_GET["data"]==4){  			/** Edit */
		$sql="UPDATE seccion SET
		s_nombre = '".$_GET["s_name"]."' 
		WHERE s_id = '".$_GET["s_id"]."'";//falta atributo
		$NewConnect->ExecuteSql($sql);
	}

?>