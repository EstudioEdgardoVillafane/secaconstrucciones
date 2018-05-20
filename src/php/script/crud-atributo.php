<?php
	include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();
	

	if($_GET["data"]==1){                   /** List   */
		$sql="SELECT * FROM atributo WHERE a_status=1";	

	// if($_GET["data"]==1){                   /** List    */
	// 	$sql="SELECT * FROM atributo WHERE a_status=1 AND a_seccion='".$_GET["atributo"]."'";	

		$NewConnect->CreateJson($sql);
	}elseif($_GET["data"]==2){              /** Delete  */
		$sqld = "UPDATE atributo SET a_status=0 WHERE a_id = '".$_GET["id"]."'";
		$NewConnect->Borrar($sqld);
	}elseif($_GET["data"]==4){  			/** Edit */
		 $sql="UPDATE atributo SET a_nombre='".$_GET["nombre"]."',a_seccion='".$_GET["seccion"]."' WHERE a_id='".$_GET["id"]."'";
		$NewConnect->ExecuteSql($sql);
	}elseif($_GET["data"]==3){
		$sql1= "INSERT INTO atributo (a_nombre,a_seccion,a_status) 
		VALUES ('".$_GET["nombre"]."','".$_GET["seccion"]."','1')";
		$NewConnect->ExecuteSql($sql1);
	}
  if($_GET["data"]==5){                   /** List    */
		$sql="SELECT a_id,a_nombre,a_seccion,a_status,s_id,s_nombre FROM atributo,seccion WHERE a_status=1 and s_id=a_seccion";	
		$NewConnect->CreateJson($sql);
	}
	if($_GET["data"]==8){                   /** List    */
		$sql="SELECT * FROM atributo WHERE a_status=1";	
		$NewConnect->CreateJson($sql);
	}
?>