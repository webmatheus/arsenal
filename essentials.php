<?php
	
	//Define DB timezone
	date_default_timezone_set('America/Sao_Paulo');
	
	//Define DB access as constants
	define("CHARSET", "UTF-8"); //Charset
	define("DB_HOST", "localhost"); //DB Host
	define("DB_USER", "test_user"); //DB User
	define("DB_PASS", "test_pass"); //DB Pass
	define("DB_NAME", "test_db_name"); //DB Name
	
	//New DB OBJ calling constants
	$_CONNECTION = new mysqli(DB_HOST, DB_USER, DB_PASS, DB_NAME);

	//Throw error DB Connect
	if ($_CONNECTION->connect_errno) {
		printf("Falha, contate o Administrador: %s\n", $_CONNECTION->connect_error);
		exit();
	}
	
?>