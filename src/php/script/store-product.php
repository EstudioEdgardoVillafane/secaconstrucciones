<?php
require_once '../class/seca.php';
require_once '../class/connect.php';

$NewConnect = new Seca();
	
$countProduct = "SELECT * FROM producto WHERE p_status=1";
$numberProduct = $NewConnect->Search($countProduct);

	@$nameProduct = $_POST["nameproduct"];
	@$section = $_POST["sectionAdd"];
	@$description = $_POST["description"];
	@$atribute = $_POST["atributoAdd"];
	@$precio = $_POST["precio"];
	@$subatributo = $_POST["subAtributoAdd"];
	 $arrayEtiqueta = $_POST["arrayEtiqueta"];
	@$tipo = $_FILES['uploadedfile']['type'];
	@$tamano = $_FILES['uploadedfile']['size'];
	@$tmp = $_FILES['uploadedfile']['tmp_name'];
	@$file_name = $_FILES['uploadedfile']['name'];
	$slug = $_POST["slug"];
	$slug = str_replace(" ","-",$slug);
	$slug = str_replace("ñ","n",$slug);
	$ancho_fijo=1920;
	$alto_fijo=1080;
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

	     $sql = "INSERT INTO producto (p_nombre,p_descripcion,p_section,p_atributo,p_subatributo,p_precio,p_url,p_orden,p_slug,p_status) 
		VALUES ('".$nameProduct."','".$description."','".$section."','".$atribute."','".$subatributo."','".$precio."','".$URL."','".$numberProduct."','".$slug."','1')";
		$ValueID = $NewConnect->IDinsert($sql);
		//  $IDProducto = $NewConnect->IDinsert();

		 $seleccion = explode(",",$arrayEtiqueta);
		 for($x=0;$x<count($seleccion);$x++){

		$SQL = "INSERT INTO relacionetiqueta (re_idproducto,re_etiqueta) VALUES ('".$ValueID."','".$seleccion[$x]."')";
		$NewConnect->ExecuteSql($SQL);
		 }
		 
		 $sql = "SELECT * FROM relacionetiqueta";
		 $varAux = $NewConnect->CreateJson($sql);
		 $NewConnect->SaveJsonGeneric("rel-etiqueta.json",$varAux);


		 for($x=0;$x<count($seleccion);$x++){
			$auxVar = 0;
			$sql = "SELECT e_id,e_uso FROM etiqueta WHERE e_id = '".$seleccion[$x]."'";
			$fila = mysqli_fetch_assoc($NewConnect->ExecuteSql($sql));
			$auxVar = $fila["e_uso"] + 1;
			$sql = "UPDATE etiqueta SET e_uso = '".$auxVar."' WHERE e_id = '".$seleccion[$x]."'";
			$NewConnect->ExecuteSql($sql);
		 }

		 @$sql = "SELECT * FROM producto WHERE p_status = 1  ORDER BY p_orden ASC";
		 @$varAux = @$NewConnect->CreateJson($sql);
		 @$NewConnect->SaveJson(@$varAux);
 ?>

