<?php
	include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();
	$NewConnect->ReadJsonGeneric("rel-etiqueta.json");
    
?>