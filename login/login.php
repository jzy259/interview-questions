<?php

class BaseApi {
	/*
	 * An api helper class
	 */
	
	// send error
	public function return_error($msg="", $data=array()){
		return json_encode(array("success" => "0", "msg" => $msg, "data" => $data));
	}
	
	// send success
	public function return_success($msg="", $data=""){
		return json_encode(array("success" => "1", "msg" => $msg, "data" => $data));
	}
}

session_start();

class LoginAPI extends BaseAPI {
	
	public function login($username, $password) {
		if(empty($username) || empty($password)) {
			return $this->return_error("Error: username and password are required");
		}
		
		// validate username and password
		if(!$this->validate($username, $password)) {
			// invalid login
			return $this->return_error("Error: username and/or passowrd are invalid");
		} else {
			// valid login
			$_SESSION["username"] = $username;
			return $this->return_success("Login successful");		
		}
	}
	
	// validate login credentials
	private function validate($username, $password) {
		if($username !== "isocket" || $password !== "password"){
			return false;
		} else {
			return true;
		}		
	}			
}

$Login = new LoginAPI();

echo $Login->login($_POST['username'], $_POST['password']);

?>