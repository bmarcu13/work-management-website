<?php
include_once('sendmail.php');
include_once('config.php');

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

$emailType = $_POST['type'];
$messageHTML = "";

$name = $_POST['name'];
$email = $_POST['email'];
$messageBody = $_POST['messageBody'];
$tel = "";
$position = "";
$companyName = "";
$messageSubject = "";

if (isset($_POST['tel'])) {
    $tel = $_POST['tel'];
}

if (isset($_POST['position'])) {
    $position = $_POST['position'];
}

if (isset($_POST['companyName'])) {
    $companyName = $_POST['companyName'];
}

if (isset($_POST['messageSubject'])) {
    $messageSubject = $_POST['messageSubject'];
}

$contactMessage = "<html>
    <head>
    <style>
        .general-info{
        width: auto;
        height: auto;
        background-color: rgb(202, 200, 200);
        padding: 6px 10px;
        width: 300px;
        border-radius: 10px;
        height: auto;
        }   
        .info span{
            font-weight: bold;
        }
    </style>
    </head>
    <!-- form-ul de sesizari -->
    <body>
        <div class=\"general-info\">
            <p><span>Nume: </span> $name </p>
            <p><span> E-mail: </span><a href=\"mailto: $email\"> $email</a> </p>
            <p><span>Telefon: </span><a href=\"tel: $tel\">$tel</a> </p>
        </div>
        <p> <span>Continuțul mail-ului:</span></p><br>
        <p>$messageBody</p>

    </body>
    </html>";

$offerRequestMessage = "
    <html lang>
    <head>
        <title>Mail de cerere oferta </title>
        <style>
        .general-info{
            width: auto;
            height: auto;
            background-color: rgb(202, 200, 200);
            padding: 6px 10px;
            width: 300px;
            border-radius: 10px;
            height: auto; 
        }
        .info span{
            font-weight: bold;

        }
        </style>
    </head>
    <!-- form-ul de sesizari -->
    <body>
        <div class=\"general-info\">
            <p class=\"info\">    <span>Nume: </span> $name </p>
            <p class=\"info\">    <span>Companie: </span> $companyName </p>
            <p class=\"info\">    <span>Funcție: </span> $position</p>
            <p class=\"info\">    <span> E-mail: </span><a href=\"mailto: $email\"> $email</a> </p>
            <p class=\"info\">    <span>Telefon: </span><a href=\"tel: $tel\">$tel</a> </p>
        </div>
        <h4 class=\"info\"> <span>Subiect: $messageSubject</span></h4>
        <p class=\"info\"> <span>Conținutul mail-ului: </span> $messageBody </p><br>
    </body>
    </html>
";

if ($emailType == 'contact') {
    $messageHTML = $contactMessage;
}
else if ($emailType == 'offerRequest') {
    $messageHTML = $offerRequestMessage;
}
else {
}

if( empty($_POST['name']) && empty($_POST['email']) ) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $SendMailEmptyerrorMessage
        ]
    ); 
    exit();
}

if ($_POST){
    //@important: Please change this before using
    http_response_code(200);
    $subject = 'Contact from: ' . $_POST['name'];
    $from = $_POST['email'];       

    $sendEmail = new Sender($adminEmail, $from, $subject, $messageHTML);
    $sendEmail->send();
} else {
 // tell the user about error
 echo json_encode(
     [
        "sent" => false,
        "message" => $SendMailFailederrorMessage
     ]
 );
}