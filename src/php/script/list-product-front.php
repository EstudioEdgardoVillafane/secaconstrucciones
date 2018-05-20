<?php
	include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();
	
	                   /** List    */
		$sql="SELECT * FROM producto WHERE p_status=1 AND p_prioridad = 1";	
		$NewConnect->CreateJson($sql);
    
?>