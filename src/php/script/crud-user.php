<?php


	include '../class/seca.php';
	include '../class/connect.php';

	$NewConnect = new Seca();
	
	if($_GET["data"]==1){
		
		$AuxVar;
		$AuxVar = md5($_GET["ub_password"]);
	  $SQL = "SELECT * FROM userb WHERE ub_user = '".$_GET["ub_user"]."' AND ub_password = '".$AuxVar."' AND ub_status=1";	
		$Row = $NewConnect->Search($SQL);
		if($Row == 1){
			echo $Row;
		}else{
			echo 0;
		}
	}elseif($_GET["data"]==8){
		$AuxVar;
		$AuxVar = md5($_GET["Password"]);
		$SQL = "SELECT * FROM userb WHERE ub_id = '".$_GET["ub_id"]."' AND ub_password = '".$AuxVar."' AND ub_status=1";	
		$Row = $NewConnect->Search($SQL);
		if($Row == 1){
			echo $Row;
		}else{
			echo 0;
		}
	}elseif($_GET["data"]==2){
		$sqld = "UPDATE userb SET ub_status = 0 WHERE ub_id = '".$_GET["ub_id"]."'";
		$NewConnect->Borrar($sqld);
	}elseif($_GET["data"]==3){
		$sql = "INSERT INTO userb (ub_user,ub_email,ub_password,ub_status) 
		VALUES ('".$_GET["ub_user"]."','".$_GET["ub_email"]."','".md5($_GET["ub_password"])."','1')";
		$NewConnect->ExecuteSql($sql);
	}elseif($_GET["data"]==4){
		$sql="UPDATE userb SET
        ub_user = '".$_GET["ub_user"]."',
        ub_email = '".$_GET["ub_email"]."',
        ub_password = '".md5($_GET["ub_password"])."'
         WHERE ub_id = '".$_GET["ub_id"]."'";
		$NewConnect->ExecuteSql($sql);
	}elseif($_GET["data"]==7){			/**Edit */
		$sql="UPDATE userb SET
        ub_user = '".$_GET["ub_user"]."',
        ub_email = '".$_GET["ub_email"]."'
         WHERE ub_id = '".$_GET["ub_id"]."'";
		$NewConnect->ExecuteSql($sql);
	}elseif($_GET["data"]==5){
			$SQL = "SELECT * FROM userb WHERE ub_status=1";	
			echo $NewConnect->CreateJson($SQL);			
	}elseif($_GET["data"]==6){
		echo $_SESSION["usuario"];
	}

?>