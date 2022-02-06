<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database'); 
   $host = "localhost";
   $username  = "Santiago Espinoza";
   $passwd = "santiago0216";
   $dbname = "VirtuGal.2";

$con = mysqli_connect('$host','$username','$password',  '$dbName');

// get the post records
$txtName = $_POST['txtName'];
$txtEmail = $_POST['txtEmail'];
$txtPhone = $_POST['txtPhone'];
$txtMessage = $_POST['txtMessage'];

// database insert SQL code
$sql = "INSERT INTO `tblContact` (`ID`, `fldName`, `fldEmail`, `fldPhone`, `fldMessage`) VALUES ('0', '$txtName', '$txtEmail', '$txtPhone', '$txtMessage')";

// insert in database 
$rs = mysqli_query($con, $sql);

if($rs)
{
	echo "Contact Records Inserted";
}

?>