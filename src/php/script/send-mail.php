<?php

$Name = $_GET["nombre"];
$Email = $_GET["email"];
$Email = "matiasbp7@hotmail.com";
$Texto = $_GET["consulta"];
$Telefono = $_GET["telefono"];

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
$emailDestino = "matiasbp7@hotmail.com";

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
$mail->FromName = $Name;
$mail->AddAddress($emailDestino); // Esta es la dirección a donde enviamos los datos del formulario
$mail->AddReplyTo($Email); // Esto es para que al recibir el correo y poner Responder, lo haga a la cuenta del visitante. 
$mail->Subject = "AbacorBsAs 2018 - Consulta"; // Este es el titulo del email.
$mensajeHtml = nl2br($mensaje);
$mail->Body = "{$mensajeHtml} <br /><br />Formulario de Contacto<br /> <br><br> Mi nombre es ".$Name." y esta es mi consulta: <br><br>".$Texto."<br><br> Mi telefono es: ".$Telefono; // Texto del email en formato HTML
$mail->AltBody = "{$mensaje} \n\n Formulario de Contacto \n\n Esta es la consulta de $Name: \n\n $Texto"; // Texto sin formato HTML
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