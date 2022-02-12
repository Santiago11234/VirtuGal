<?php
$servername = "VirtuGal";
$username = "Santiago";
$password = "santiago0216";

$conn = new mysqli($ViruGal, $Santiago, $santiago0216);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
