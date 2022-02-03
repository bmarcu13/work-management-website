<?php
include_once('sendmail.php');
include_once('config.php');

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: Content-Type');
// $rest_json = file_get_contents("php://input");
// $_POST = json_decode($rest_json, true);

$semi_rand = md5(time()); 
$mime_boundary = "Multipart_Boundary_x{$semi_rand}x";

$emailType = $_POST['type'];
$messageHTML = "";

$name = $_POST['name'];
$email = $_POST['email'];
$messageBody = $_POST['messageBody'];
$phone = "";
$position = "";
$companyName = "";
$messageSubject = "";

if (isset($_POST['phone'])) {
    $phone = $_POST['phone'];
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
        .general-info {
            width: auto;
            height: auto;
            margin-bottom: 10px;
            width: 300px;
            border: 1px solid rgb(214,214,214);
            border-radius: 5px;
            padding: 5px;
            height: auto;
            font-size: 14px;
        }
        .important-info {
            font-size: 16px;
        }
        .general-info p {
            margin: 5px;
        }
        .info span{
            font-weight: bold;
        }
    </style>
    </head>
    <!-- form-ul de sesizari -->
    <body>
        <div class=\"general-info\">
            <p class=\"info\"><span>Nume: </span> $name </p>
            <p class=\"info\"><span> E-mail: </span><a href=\"mailto: $email\"> $email</a> </p>
            <p class=\"info\"><span>Telefon: </span><a href=\"tel:$phone\">$phone</a> </p>
        </div>
        <p class=\"info important-info\"important-info> <span>Continuțul mail-ului:</span><br><br>$messageBody</p>

    </body>
    </html>";

$offerRequestMessage = "
    <html lang>
    <head>
        <title>Mail de cerere oferta </title>
        <style>
        .general-info {
            width: auto;
            height: auto;
            margin-bottom: 10px;
            width: 300px;
            border: 1px solid rgb(214,214,214);
            border-radius: 5px;
            padding: 5px;
            height: auto;
            font-size: 14px;
          }
          .important-info {
              font-size: 16px;
          }
          .general-info p {
              margin: 5px;
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
            <p class=\"info\">    <span> E-mail: </span><a href=\"mailto: $email\"> $email</a> </p>
            <p class=\"info\">    <span>Telefon: </span><a href=\"tel:$phone\">$phone</a> </p>
            <p class=\"info\">    <span>Companie: </span> $companyName </p>
            <p class=\"info\">    <span>Funcție: </span> $position</p>
        </div>
        <h4 class=\"info important-info\"> <span>Subiect: $messageSubject</span></h4>
        <p class=\"info important-info\"> <span>Conținutul mail-ului: </span><br><br> $messageBody </p>
    </body>
    </html>
";

$jobMessage = "
<html>
<head>
    <title>Mail pt aplicatie job </title>
    <style>
    .general-info {
      width: auto;
      height: auto;
      margin-bottom: 10px;
      width: 300px;
      border: 1px solid rgb(214,214,214);
      border-radius: 5px;
      padding: 5px;
      height: auto;
      font-size: 14px;
    }
    .important-info {
        font-size: 16px;
    }
    .general-info p {
        margin: 5px;
    }
    .info span{
        font-weight: bold;
    }
    </style>
</head>
<body>
    <div class=\"general-info\">
        <p class=\"info\">    <span>Nume: </span> $name </p>
        <p class=\"info\">    <span> E-mail: </span><a href=\"mailto: $email\"> $email</a> </p>
        <p class=\"info\">    <span>Telefon: </span><a href=\"tel:$phone\">$phone</a> </p>
    </div>
    <div style=\"padding: 5px;\">
    <p class=\"info important-info\"> <span>Poziția pentru care se aplică: </span>$position</p>
    <p class=\"info important-info\"> <span>Conținutul mail-ului:</span><br><br>$messageBody </p>
</body>
</html>
";

if ($emailType == 'contact') {
    $messageHTML = $contactMessage;
}
else if ($emailType == 'offerRequest') {
    $messageHTML = $offerRequestMessage;
}
else if($emailType == 'job') { 
    $messageHTML = "--{$mime_boundary}\n" . "Content-Type: text/html; charset=\"UTF-8\"\n" .
                        "Content-Transfer-Encoding: 7bit\n\n" . $jobMessage . "\n\n";
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
    

    if ($emailType == 'job') {
        $uploadStatus = 1;
        $uploadedFile = '';
        //Checking attachment
        if(!empty($_FILES["cv"]["name"])){
                    
            // File path config
            $targetDir = "uploads/";
            $fileName = basename($_FILES["cv"]["name"]);
            $targetFilePath = $targetDir . $fileName;
            $fileType = pathinfo($targetFilePath,PATHINFO_EXTENSION);

            $sendEmail->setMessage($fileType);
            
            // Allow certain file formats
            $allowTypes = array('pdf', 'doc', 'docx');
            if(in_array($fileType, $allowTypes)){
                // Upload file to the server
                if(move_uploaded_file($_FILES["cv"]["tmp_name"], $targetFilePath)){
                    $uploadedFile = $targetFilePath;
                }else{
                    $uploadStatus = 0;
                    $statusMsg = "Sorry, there was an error uploading your file.";
                }
            }else{
                $uploadStatus = 0;
                $statusMsg = 'Sorry, only PDF, DOC, JPG, JPEG, & PNG files are allowed to upload.';
            }
            if(!empty($uploadedFile) && file_exists($uploadedFile)){
                        // Headers for attachment 
                        $headers = 'From: ' . $email . "\r\n" .
                        'Reply-To: ' . $email . "\r\n" .
                        'MIME-Version: 1.0' . "\r\n" .
                        "Content-Type: multipart/mixed;\n" . " boundary=\"{$mime_boundary}\""; 
                        
                        // Preparing attachment
                        if(is_file($uploadedFile)){
                            $messageHTML .= "--{$mime_boundary}\n";
                            $fp =    @fopen($uploadedFile,"rb");
                            $data =  @fread($fp,filesize($uploadedFile));
                            @fclose($fp);
                            $data = chunk_split(base64_encode($data));
                            $messageHTML .= "Content-Type: application/octet-stream; name=\"".basename($uploadedFile)."\"\n" . 
                            "Content-Description: ".basename($uploadedFile)."\n" .
                            "Content-Disposition: attachment;\n" . " filename=\"".basename($uploadedFile)."\"; size=".filesize($uploadedFile).";\n" . 
                            "Content-Transfer-Encoding: base64\n\n" . $data . "\n\n";
                        }
                        
                        $messageHTML .= "--{$mime_boundary}--";
                        
                        // Send email
                        $sendEmail->setHeaderForAttachment($headers);
                        $sendEmail->setMessage($messageHTML);
                        $sendEmail->send();

                        // Delete attachment file from the server
                        @unlink($uploadedFile);
            }   
        }
    }
    else {
        $sendEmail->send();
    }
    
    
} 
else {
 // tell the user about error
 echo json_encode(
     [
        "sent" => false,
        "message" => $SendMailFailederrorMessage
     ]
 );
}