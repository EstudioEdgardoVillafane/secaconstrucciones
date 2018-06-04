<?php

    include '../class/seca.php';
    include '../class/connect.php';
    
    $NewConnect = new Seca();

    $sql = "SELECT * FROM etiqueta ORDER BY e_uso ASC";
    echo $NewConnect->CreateJson($sql);

?>