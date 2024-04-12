<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nom = $_POST["nom"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Adresse e-mail de réception
    $to = "esteban.vialmontpellier@gmail.com";

    // Sujet de l'e-mail
    $subject = "Nouveau message de contact de $nom";

    // Corps de l'e-mail
    $body = "Nom: $nom\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Envoi de l'e-mail
    if (mail($to, $subject, $body)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Une erreur s'est produite lors de l'envoi du message.";
    }
} else {
    echo "Erreur: Cette page ne peut être accédée directement.";
}
?>