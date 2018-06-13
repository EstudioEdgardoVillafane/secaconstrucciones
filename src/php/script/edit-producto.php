<?php
require_once '../class/seca.php';
require_once '../class/connect.php';

$NewConnect = new Seca();
    
    $ID = $_POST["id-ed"];
	$nameProduct = $_POST["nameOfProduct-ed"];
	$section = $_POST["sectionAdd-ed"];
	$description = $_POST["description-ed"];
	$atribute = $_POST["atributoAdd-ed"];
	$precio = $_POST["precioedit"];
	$subatributo = $_POST["subAtributoAdd-ed"];
	
	$tipo = $_FILES['uploadedfile-ed']['type'];
	$tamano = $_FILES['uploadedfile-ed']['size'];
	$tmp = $_FILES['uploadedfile-ed']['tmp_name'];
	$file_name = $_FILES['uploadedfile-ed']['name'];


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

if($tamano == 0){
    $sql = "UPDATE producto SET p_nombre = '".$nameProduct."', p_descripcion = '".$description."', p_section = '".$section."', p_atributo = '".$atribute."', p_subatributo = '".$subatributo."', p_precio = '".$precio."' WHERE p_id ='".$ID."'";

}else{
    $sql = "UPDATE producto SET p_nombre = '".$nameProduct."', p_descripcion = '".$description."', p_section = '".$section."', p_atributo = '".$atribute."', p_subatributo = '".$subatributo."', p_precio = '".$precio."', p_url = '".$URL."' WHERE p_id ='".$ID."'";
}
$NewConnect->ExecuteSql($sql);
	$sql = "SELECT * FROM producto WHERE p_status = 1 ORDER BY p_orden ASC";
	$varAux = $NewConnect->CreateJson($sql);
	$NewConnect->SaveJson($varAux);

 ?>