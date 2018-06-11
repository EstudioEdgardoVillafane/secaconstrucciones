<?php

    include '../class/seca.php';
    include '../class/connect.php';
    
    $NewConnect = new Seca();
    // $NewConnect->ReadJsonGeneric("cliente.json");

    $sql="SELECT * FROM cliente WHERE c_status = 1";	
    echo $NewConnect->CreateJson($sql);

?>