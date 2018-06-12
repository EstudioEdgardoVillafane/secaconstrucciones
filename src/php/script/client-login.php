<?php		

    include_once '../class/connect.php';
    include_once '../class/seca.php';

    $connect = file_get_contents("php://input");
    $result = json_decode($connect);

    $NewConnect = new Seca();
        
    $User = $result->nameUser;
	$Pass = $result->passUser; 

    $SQL = "SELECT * FROM cliente WHERE c_usuario = '".$User."' AND c_contrasena = '".md5($Pass)."' AND c_status=1";	
	$Row = $NewConnect->Search($SQL);

    if($Row == 1){
		echo $Row;
	}else{
		echo 0;
    }



?>