<?php

    include '../class/seca.php';
    include '../class/connect.php';
    
    $NewConnect = new Seca();

    $sql = "SELECT * FROM etiqueta";
    $NewConnect->CreateJson($sql);

?>