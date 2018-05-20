<?php
	include '../class/seca.php';
	include '../class/connect.php';

    $NewConnect = new Seca();
    
	if($_GET["data"] == 1){
        $sql = "UPDATE producto SET p_prioridad = 0 WHERE p_id = '".$_GET["id"]."'";		
    }else{
        $sql = "UPDATE producto SET p_prioridad = 1 WHERE p_id = '".$_GET["id"]."'";		

    }
		
		$NewConnect->ExecuteSql($sql);
	

?>