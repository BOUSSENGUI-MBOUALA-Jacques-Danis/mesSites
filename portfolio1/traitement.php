<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Récupérer les données du formulaire
    $nom = $_POST["nom"];
    $numero = $_POST["numero"];
    $sujet = $_POST["sujet"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    
    // Validation des données
    if (!preg_match("/^[a-zA-ZÀ-ÿ\s\-]+$/", $nom)) {
        echo "Le nom entré n'est pas valide.";
        exit; // Arrête le script
    }
    
    if (!preg_match("/^[0-9\+\-\s]+$/", $numero)) {
        echo "Le numéro entré n'est pas valide.";
        exit; // Arrête le script
    }
    
    if (empty($sujet)) {
        echo "Le sujet est requis.";
        exit; // Arrête le script
    }
    
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo "L'adresse email entrée n'est pas valide.";
        exit; // Arrête le script
    }
    
    if (empty($message)) {
        echo "Le message est requis.";
        exit; // Arrête le script
    }
    
    // Configuration de l'adresse e-mail de l'expéditeur
    //ini_set("sendmail_from", "danis.aff23@gmail.com");
    
    // Construire le corps de l'e-mail
    $email_body = "Nom: $nom\n";
    $email_body .= "Numéro: $numero\n";
    $email_body .= "Sujet: $sujet\n";
    $email_body .= "Email: $email\n\n";
    $email_body .= "Message:\n$message";
    
    // Envoyer l'e-mail
    $destinataire = "jacquesboussengui@gmail.com";
    $sujet_email = "Nouveau message de votre site web";
    $headers = "From: $email";
    
    if (mail($destinataire, $sujet_email, $email_body, $headers)) {
        echo "Votre message a été envoyé avec succès.";
    } else {
        echo "Erreur lors de l'envoi du message.";
    }
}
?>
