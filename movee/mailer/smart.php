<?php 

$people = $_POST['people'];
$phone = $_POST['phone'];
$city= $_POST['city'];
$order= $_POST['order'];
$food= $_POST['food'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

// $mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'panins899@gmail.com';                 // Наш логин
$mail->Password = 'vita24395';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('panins899@gmail.com', 'Pulse');   // От кого письмо 
$mail->addAddress('rahibo6410@art2427.com');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные';
$mail->Body    = '
		Пользователь оставил данные <br> 
	Имя: ' . $people . ' <br>
	Номер телефона: ' . $phone . '<br>
	Город ' . $city . '<br>
	Заказывали ли уже? ' . $order . '<br>
	Тип питаия' .$food . '<br>';

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>
