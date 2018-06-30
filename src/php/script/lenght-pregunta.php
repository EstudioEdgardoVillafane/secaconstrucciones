<?php 

include '../class/seca.php';
include '../class/connect.php';

$NewConnect = new Seca();

$sql = "SELECT * FROM preguntas WHERE pr_status = 1 AND pr_estado = 1";
echo($NewConnect->Search($sql));

?>