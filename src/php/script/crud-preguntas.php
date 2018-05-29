<?php
date_default_timezone_set("America/Argentina/Buenos_Aires");
$time=time();
$_GET["fecha"]=date("Y-m-d",$time);
$_GET["hora"]= date("H:i",$time);

	include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();
	
	if($_GET["data"]==5){                   /** List   */
		$sql="SELECT * FROM preguntas WHERE p_status=1";	
		$NewConnect->CreateJson($sql);
	}elseif($_GET["data"]==4){  			/** Edit */
		echo $sql="UPDATE preguntas SET
		p_respuesta = '".$_GET["respuesta"]."',p_fecha='".$_GET["fecha"]."',p_hora='".$_GET["hora"]."',p_pregunta='".$_GET["pregunta"]."'
		WHERE p_id = '".$_GET["id"]."'";
		$NewConnect->ExecuteSql($sql);
    }
    if($_GET["data"]==2){                   /** List   */

		$sql="SELECT * FROM preguntas WHERE p_id=".$_GET["id"]."'";	
		$NewConnect->CreateJson($sql);
	}

?>