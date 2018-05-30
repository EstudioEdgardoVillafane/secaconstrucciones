<?php

    include '../class/seca.php';
    include '../class/connect.php';
    
    $NewConnect = new Seca();

    $sql = "SELECT * FROM etiqueta";
    echo $NewConnect->CreateJson($sql);

?>