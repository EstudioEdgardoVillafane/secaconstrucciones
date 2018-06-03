<?php
require_once '../class/seca.php';
require_once '../class/connect.php';

$NewConnect = new Seca();

$countClient = "SELECT * FROM cliente WHERE c_status=1";
echo $numberclient = $NewConnect->Search($countClient);

function generarCodigo($longitud) {
	$key = '';
	$pattern = '1234567890abcdefghijklmnopqrstuvwxyz';
	$max = strlen($pattern)-1;
	for($i=0;$i < $longitud;$i++) $key .= $pattern{mt_rand(0,$max)};
	return $key;
   }

	$c_usuario = $_POST["c_usuario"];
	$c_email = $_POST["c_email"];
	$c_contrasena = $_POST["c_contrasena"];
	$c_nombre = $_POST["c_nombre"];
	$c_apellido = $_POST["c_apellido"];
	$c_provincia = $_POST["c_provincia"];
	$c_localidad = $_POST["c_localidad"];
	$c_barrio = $_POST["c_barrio"];
	$c_codigo_postal = $_POST["c_codigo_postal"];
	$c_codigo_validacion = generarCodigo(6);

	$tipo = $_FILES['uploadedfile']['type'];
	$tamano = $_FILES['uploadedfile']['size'];
	$tmp = $_FILES['uploadedfile']['tmp_name'];
	$file_name = $_FILES['uploadedfile']['name'];


	$ancho_fijo=1920;
	$alto_fijo=1080;
	$ext=explode('/',$tipo);
	$aleatorio=rand(0,999999999);
	$nuevo_nombre="port-".$aleatorio.'.'.$ext[1];
	$ruta="../../uploads";
	$URL = "uploads/".$nuevo_nombre;
	if($tamano){
		if($tipo == "image/pjpeg" || $tipo == "image/jpeg"){
			$nueva_img = imagecreatefromjpeg($tmp);
		}elseif($tipo == "image/x-png" || $tipo == "image/png"){
			$nueva_img = imagecreatefrompng($tmp);
		}elseif($tipo == "image/gif"){
			$nueva_img = imagecreatefromgif($tmp);
		}
	}

	list($ancho, $alto) = getimagesize($tmp);
	$proporcion = $ancho/$alto;
	if($proporcion >1){
		$nuevo_ancho=$ancho_fijo;
		$nuevo_alto=$ancho_fijo/$proporcion;
	}else{
		//este no se va a cumplir porque todas las portadas van a ser apaisadas
		$nuevo_ancho=$alto_fijo*$proporcion;
		$nuevo_alto=$alto_fijo;
	}	

	$img_redimensionada = imagecreatetruecolor($nuevo_ancho,$nuevo_alto);
	imagecopyresampled($img_redimensionada, $nueva_img, 0, 0, 0, 0, $nuevo_ancho, $nuevo_alto, $ancho, $alto);
	
if($tipo == "image/x-png" || $tipo == "image/png"){
    imagepng ($img_redimensionada,"$ruta/$nuevo_nombre");
}else{
	imagejpeg ($img_redimensionada,"$ruta/$nuevo_nombre",80);
}	
imagedestroy ($img_redimensionada);
imagedestroy ($nueva_img);

	
	     $sql = "INSERT INTO cliente (c_usuario,c_email,c_contrasena,c_imagen,c_codigo_validacion,c_validacion,c_nombre,c_apellido,c_provincia,c_localidad,c_barrio,c_codigo_postal,c_status) 
		VALUES ('".$c_usuario."','".$c_email."','".md5($c_contrasena)."','".$URL."','".$c_codigo_validacion."','0','".$c_nombre."','".$c_apellido."','".$c_provincia."','".$c_localidad."','".$c_barrio."','".$c_codigo_postal."','1')";
		 $NewConnect->ExecuteSql($sql);

		
 ?>

