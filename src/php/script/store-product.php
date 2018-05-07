<?php
require_once '../class/seca.php';
require_once '../class/connect.php';

$NewConnect = new Seca();
	
	$nameProduct = $_POST["nameproducts"];
	$section = $_POST["sectionAdd"];
	$description = $_POST["description"];
	$atribute = $_POST["atribute"];
	$subatributo = "5";
	echo $nameProduct;
	echo $section;
	echo $atribute;
	
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

	     $sql = "INSERT INTO producto (p_nombre,p_descripcion,p_section,p_atributo,p_subatributo,p_url,p_status) 
		VALUES ('".$nameProduct."','".$description."','".$section."','".$atribute."','".$subatributo."','".$URL."','1')";
         $NewConnect->ExecuteSql($sql);

 ?>