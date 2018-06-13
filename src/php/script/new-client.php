<?php
require_once '../class/seca.php';
require_once '../class/connect.php';

$NewConnect = new Seca();

function generarCodigo($longitud) {
	$key = '';
	$pattern = '1234567890abcdefghijklmnopqrstuvwxyz';
	$max = strlen($pattern)-1;
	for($i=0;$i < $longitud;$i++) $key .= $pattern{mt_rand(0,$max)};
	return $key;
   }
   
       $conex = file_get_contents("php://input");
       $resultado = json_decode($conex);
      

	$c_usuario = $resultado->usuario;
	$c_email = $resultado->email;
	$c_contrasena = $resultado->contra;
	$c_nombre = $resultado->nombre;
	$c_apellido = $resultado->apellido;
	$c_provincia = $resultado->provincia;
	$c_localidad = $resultado->localidad;
	$c_barrio = $resultado->barrio;
	$c_codigo_postal = $resultado->cp;
	$c_codigo_validacion = generarCodigo(6);
	
	     $sql = "INSERT INTO cliente (c_usuario,c_email,c_contrasena,c_codigo_validacion,c_validacion,c_nombre,c_apellido,c_provincia,c_localidad,c_barrio,c_codigo_postal,c_status) 
		VALUES ('".$c_usuario."','".$c_email."','".md5($c_contrasena)."','".$c_codigo_validacion."','0','".$c_nombre."','".$c_apellido."','".$c_provincia."','".$c_localidad."','".$c_barrio."','".$c_codigo_postal."','1')";
		 $NewConnect->ExecuteSql($sql);

		
 ?>

