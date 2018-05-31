<?php
require_once '../class/seca.php';
require_once '../class/connect.php';

$NewConnect = new Seca();
	
$countClient = "SELECT * FROM cliente WHERE c_status=1";
echo $numberclient = $NewConnect->Search($countClient);

	$c_usuario = $_POST["c_usuario"];
	$c_email = $_POST["c_email"];
	$c_contrasena = $_POST["c_contrasena"];
	
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


	     $sql = "INSERT INTO cliente (c_usuario,c_email,c_contrasena,c_imagen,c_validacion,c_status) 
		VALUES ('".$c_usuario."','".$c_email."','".md5($c_contrasena)."','".$URL."','0','1')";
		 $NewConnect->ExecuteSql($sql);
		//  $sql = "SELECT * FROM cliente WHERE c_status = 1 ORDER BY p_orden ASC";
		//  $varAux = $NewConnect->CreateJson($sql);
		//  $NewConnect->SaveJson($varAux);
		date_default_timezone_set("America/Argentina/Buenos_Aires");
		$time=time();
		$fecha=date("Y-m-d",$time);
		$hora= date("H:i",$time);
		
		/**
		 * @version 1.0
		 */
		
		require("class.phpmailer.php");
		require("class.smtp.php");
		
		// Valores enviados desde el formulario
		/*if ( !isset($_POST["nombre"]) || !isset($_POST["email"]) || !isset($_POST["mensaje"]) ) {
			die ("Es necesario completar todos los datos del formulario");
		}
		$nombre = $_POST["nombre"];
		$email = $_POST["email"];
		$telefono = $_POST["telefono"];
		$mensaje = $_POST["mensaje"];*/
		
		// $nombre = "Edgardo";
		// $email = "hourcadecristian@gmail.com";
		$mensaje = "$fecha";
		
		// Datos de la cuenta de correo utilizada para enviar vía SMTP
		$smtpHost = "c1090159.ferozo.com";  // Dominio alternativo brindado en el email de alta 
		$smtpUsuario = "admin@seca.com.ar";  // Mi cuenta de correo
		$smtpClave = "Crujia2018";  // Mi contraseña
		
		// Email donde se enviaran los datos cargados en el formulario de contacto
		$emailDestino = "$c_email";
		
		$mail = new PHPMailer();
		$mail->IsSMTP();
		$mail->SMTPAuth = true;
		$mail->Port = 587; 
		$mail->IsHTML(true); 
		$mail->CharSet = "utf-8";
		
		$mail->Host = $smtpHost; 
		$mail->Username = $smtpUsuario; 
		$mail->Password = $smtpClave;
		
		$mail->From = $smtpUsuario; // Email desde donde envío el correo.
		$mail->FromName = $c_usuario;
		$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario
		$mail->AddReplyTo($c_email); // Esto es para que al recibir el correo y poner Responder, lo haga a la cuenta del visitante. 
		$mail->Subject = "Confirmacon de la cuenta de Seca Construcciones"; // Este es el titulo del email.
		$mensajeHtml = nl2br($mensaje);
		$mail->Body = "{$mensajeHtml} entra a confirmar tu cuenta: " // Texto del email en formato HTML
		$mail->AltBody = "{$mensaje} \n\n Formulario de Contacto \n\n Esta es la consulta de $c_usuario: \n\n $Texto"; // Texto sin formato HTML
		// FIN - VALORES A MODIFICAR //
		
		$mail->SMTPOptions = array(
			'ssl' => array(
				'verify_peer' => false,
				'verify_peer_name' => false,
				'allow_self_signed' => true
			)
		);
		
		$estadoEnvio = $mail->Send(); 
		if($estadoEnvio){
			echo "El correo fue enviado correctamente.";
		} else {
			echo "Oc";
		}
		
 ?>

