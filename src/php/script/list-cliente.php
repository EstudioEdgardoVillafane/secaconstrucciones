<?php

    include '../class/seca.php';
    include '../class/connect.php';
    
    $NewConnect = new Seca();

    $sql="SELECT * FROM cliente WHERE c_status=1";	
    $NewConnect->CreateJson($sql);

?>