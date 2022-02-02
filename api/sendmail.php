<?php
/**
 * @class Sender
 * This is used to send email via react contact from component
 */
class Sender
{
    public $sendTo;
    public $sendFrom;
    public $subject;
    public $message;
    public $headers;
    public $error = [];

    public function __construct($sendTo, $sendFrom = null, $subject, $message)
    {
        $this->sendTo = "bogdanmarcu2003@gmail.com";
        $this->sendFrom = ($sendFrom) ? $sendFrom : 'hey@test.com';
        $this->subject = $subject;
        $this->message = $message;
        $this->headers = 'From: '.$this->getFrom() . "\r\n" .
            'Reply-To: '.$this->getFrom() . "\r\n" .
            'X-Mailer: PHP/' . phpversion() . "\r\n" .
            'MIME-Version: 1.0' . "\r\n" .
            'Content-type: text/html; charset=iso-8859-1';
    }

    public function setTo($email, $name) {
        return $this->sendTo = $email;
    }

    public function getTo() {
        return $this->sendTo;
    }

    public function setFrom($email, $name)  {
        return $this->sendFrom = $email;
    }

    public function setSubject($subject) {
        return $this->subject = $subject;
    }

    public function getSubject() {
        return $this->subject;
    }

    public function setMessage($message) {
        $this->message = $message;
        return $this;
    }

    public function getMessage() {
        return $this->message;
    }

    public function setHeader() {
        $headers = 'From: '.$this->getFrom() . "\r\n" .
            'Reply-To: '.$this->getFrom() . "\r\n" .
            'X-Mailer: PHP/' . phpversion();

        $this->headers = $headers;
        return $this;
    }

    public function setHeaderForAttachment($newHeaders) {
        $this->headers = $newHeaders;
        return $this;
    }

    public function getFrom() {
        return $this->sendFrom;
    }

    public function send() {
        $to = $this->sendTo;
        $from = $this->sendFrom;
        $subject = $this->subject;
        $message = $this->message;

        mail($to, $subject, $message, $this->headers);
        echo json_encode(array("sent" => true));
    }
}