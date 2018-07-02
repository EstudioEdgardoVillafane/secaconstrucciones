<?php
	include '../class/seca.php';
	include '../class/connect.php';

    $NewConnect = new Seca();
        
	$s_nombre = $_POST["s_name"];

    $s_nombre = str_replace(" ","-",$s_nombre);
	$s_nombre = str_replace("ñ","n",$s_nombre);
	$s_nombre = str_replace("á","a",$s_nombre);
	$s_nombre = str_replace("é","e",$s_nombre);
	$s_nombre = str_replace("í","i",$s_nombre);
	$s_nombre = str_replace("ó","o",$s_nombre);
	$s_nombre = str_replace("ú","u",$s_nombre);

	@$tipo = $_FILES['s_imagen']['type'];
	@$tamano = $_FILES['s_imagen']['size'];
	@$tmp = $_FILES['s_imagen']['tmp_name'];
	@$file_name = $_FILES['s_imagen']['name'];

	$ancho_fijo=200;
	$alto_fijo=200;
	$ext=explode('/',$tipo);
	$aleatorio=rand(0,999999999);
	@$nuevo_nombre="port-".$aleatorio.'.'.$ext[1];
	$ruta="../../uploads";
	$URL = "uploads/".$nuevo_nombre;
	if($tamano){
		if($tipo == "image/pjpeg" || $tipo == "image/jpeg"){
			$nueva_img = @imagecreatefromjpeg($tmp);
		}elseif($tipo == "image/x-png" || $tipo == "image/png"){
			$nueva_img = @imagecreatefrompng($tmp);
		}elseif($tipo == "image/gif"){
			$nueva_img = @imagecreatefromgif($tmp);
		}
	}

	@list($ancho, $alto) = @getimagesize($tmp);
	@$proporcion = $ancho/$alto;
	if($proporcion >1){
		@$nuevo_ancho=$ancho_fijo;
		@$nuevo_alto=$ancho_fijo/$proporcion;
	}else{
		//este no se va a cumplir porque todas las portadas van a ser apaisadas
		@$nuevo_ancho=$alto_fijo*$proporcion;
		@$nuevo_alto=$alto_fijo;
	}	

	$img_redimensionada = @imagecreatetruecolor($nuevo_ancho,$nuevo_alto);
	@imagecopyresampled($img_redimensionada, $nueva_img, 0, 0, 0, 0, $nuevo_ancho, $nuevo_alto, $ancho, $alto);
	
if($tipo == "image/x-png" || $tipo == "image/png"){
    @imagepng ($img_redimensionada,"$ruta/$nuevo_nombre");
}else{
	@imagejpeg ($img_redimensionada,"$ruta/$nuevo_nombre",80);
}	
@imagedestroy ($img_redimensionada);
@imagedestroy ($nueva_img);

    $sql = "INSERT INTO seccion (s_nombre,s_imagen,s_status) 
    VALUES ('".$s_nombre."','".$URL."','1')";
	echo $NewConnect->ExecuteSql($sql);
?>