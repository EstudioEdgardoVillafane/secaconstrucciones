<?php
	include '../class/seca.php';
	include '../class/connect.php';

    $NewConnect = new Seca();
    
    $sql="UPDATE cliente  SET  c_validacion = 1  WHERE c_codigo_validacion = '".$_GET["validationCode"]."'";
    $NewConnect->ExecuteSql($sql);

?>