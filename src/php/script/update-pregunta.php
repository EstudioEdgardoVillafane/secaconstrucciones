<?php

	include '../class/seca.php';
	include '../class/connect.php';

    $NewConnect = new Seca();

    $conex = file_get_contents("php://input");
    $Object = json_decode($conex);

    $Id = $Object->id;
    $Response = $Object->response;

    $sql = "UPDATE preguntas SET pr_respuesta = '".$Response."', pr_estado = 2 WHERE pr_id = '".$Id."'";
    $NewConnect->ExecuteSql($sql);


    require("class.phpmailer.php");
    require("class.smtp.php");
    

    $mensaje = "Hola.";
    // Datos de la cuenta de correo utilizada para enviar vía SMTP
    $smtpHost = "c1090159.ferozo.com";  // Dominio alternativo brindado en el email de alta 
    $smtpUsuario = "admin@seca.com.ar";  // Mi cuenta de correo
    $smtpClave = "Crujia2018";  // Mi contraseña
    // Email donde se enviaran los datos cargados en el formulario de contacto
    $emailDestino = "$Email";
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
    $mail->AddAddress($Object->email); // Esta es la dirección a donde enviamos los datos del formulario
    $mail->AddReplyTo($Email); // Esto es para que al recibir el correo y poner Responder, lo haga a la cuenta del visitante. 
    $mail->Subject = "Seca Construcciones - Respuesta a tu pregunta"; // Este es el titulo del email.
    $mensajeHtml = nl2br($mensaje);
    $mail->Body = "{$mensajeHtml} <br /><br />Buenas tardes ".$Name.", como está? <br> ".$Response.". <br> Su pregunta: ".$Object->mensaje; // Texto del email en formato HTML
    $mail->AltBody = "{$mensaje} ?????"; // Texto sin formato HTML
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