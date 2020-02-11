<?php 
$name = $_POST['name'];
$number = $_POST['number'];
require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'kot_ilay_kot@mail.ru';                 // Наш логин
$mail->Password = '375336694123q';                          // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
$mail->setFrom('kot_ilay_kot@mail.ru', '');   // От кого письмо 
$mail->addAddress('kot6694123@mail.ru');     // Add a recipient
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Новый заказ';
$mail->Body    = '
	Пользователь оставил свои данные <br><br> 
	Имя: '.$name.' <br>
	Номер телефона: '.$number.' <br>';
if(strlen($name) < 3) {
	echo'<meta http-equiv="refresh" content="0; url=../index.html">';
	return false;
};
if(strlen($number) < 3) {
	echo'<meta http-equiv="refresh" content="0; url=../index.html">';
	return false;
};
if(!$mail->send()) {
    return false;
} else {
  header("Location: ../thank-page.html");  
}
?>