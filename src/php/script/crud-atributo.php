<?php
	include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();
	

	if($_GET["data"]==1){                   /** List   */

		$sql="SELECT * FROM atributo WHERE a_status=1 AND a_seccion='".$_GET["seccion"]."'";	
		echo $NewConnect->CreateJson($sql);
	}elseif($_GET["data"]==2){              /** Delete  */
		$sqld = "UPDATE atributo SET a_status=0 WHERE a_id = '".$_GET["id"]."'";
		$NewConnect->Borrar($sqld);
	}elseif($_GET["data"]==4){  			/** Edit */
		 $sql="UPDATE atributo SET a_nombre='".$_GET["nombre"]."',a_seccion='".$_GET["seccion"]."' WHERE a_id='".$_GET["id"]."'";
		$NewConnect->ExecuteSql($sql);
	}elseif($_GET["data"]==3){
		$a_nombre = $_GET["nombre"];
		$a_nombre = str_replace(" ","-",$a_nombre);
		$a_nombre = str_replace("ñ","n",$a_nombre);
		$a_nombre = str_replace("á","a",$a_nombre);
		$a_nombre = str_replace("é","e",$a_nombre);
		$a_nombre = str_replace("í","i",$a_nombre);
		$a_nombre = str_replace("ó","o",$a_nombre);
		$a_nombre = str_replace("ú","u",$a_nombre);

		$sql1= "INSERT INTO atributo (a_nombre,a_seccion,a_status) 
		VALUES ('".$a_nombre."','".$_GET["seccion"]."','1')";
		$NewConnect->ExecuteSql($sql1);

		$sql = "SELECT * FROM atributo WHERE a_status=1";
		$varAux = @$NewConnect->CreateJson($sql);
		$NewConnect->SaveJsonGeneric('atributo.json',$varAux);
	}
	if($_GET["data"]==10){
		$NewConnect->ReadJsonGeneric("atributo.json");
	}
  if($_GET["data"]==5){                   /** List    */
		$sql="SELECT a_id,a_nombre,a_seccion,a_status,s_id,s_nombre FROM atributo,seccion WHERE a_status=1 and s_id=a_seccion";	
		echo $NewConnect->CreateJson($sql);
	}
	if($_GET["data"]==8){                   /** List    */
		$sql="SELECT * FROM atributo WHERE a_status=1";	
		$NewConnect->CreateJson($sql);
	}
?>