<?php

    include '../class/seca.php';
	include '../class/connect.php';

    $NewConnect = new Seca();
    
    $conex = file_get_contents("php://input");
    $Object = json_decode($conex);


    date_default_timezone_set("America/Argentina/Buenos_Aires");
    $time=time();
    $fecha=date("Y-m-d",$time);
    $hora= date("H:i",$time);

    $Nombre = $Object->nombre;
    $Email = $Object->email;
    $Mensaje = $Object->mensaje;
    $Producto = $Object->producto;

    $SQL = "INSERT INTO preguntas (pr_cliente,pr_mensaje,pr_email,pr_producto,pr_fecha,pr_hora,pr_estado,pr_status) 
    VALUES ('".$Nombre."','".$Mensaje."','".$Email."','".$Producto."','".$fecha."','".$hora."','1' ,'1')";
    $NewConnect->ExecuteSql($SQL);

?>