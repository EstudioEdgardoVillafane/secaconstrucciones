<?php
require_once '../class/seca.php';
require_once '../class/connect.php';

$NewConnect = new Seca();
    
    $Id = $_POST["editId"];
	$editNombre = $_POST["edit_name"]; 

	
    // $deleteImg = $_POST["deleteImg"];
// Codigo original. 
	$deleteImg = "port-850466701";
echo  $deleteImg;
	$tipo = $_FILES['edit_imagen']['type'];
	$tamano = $_FILES['edit_imagen']['size'];
	$tmp = $_FILES['edit_imagen']['tmp_name'];
	$file_name = $_FILES['edit_imagen']['name'];


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
// termina codigo original
if($tamano == 0){
	$sql="UPDATE seccion SET
	s_nombre = '".$editNombre."'
	WHERE s_id = '".$Id."'";

}else{
    $sql = "UPDATE seccion SET 
	s_nombre = '".$editNombre."',
	s_imagen = '".$URL."'
	WHERE s_id = '".$Id."' ";
echo unlink($deleteImg);
}
echo $NewConnect->ExecuteSql($sql);

 ?>