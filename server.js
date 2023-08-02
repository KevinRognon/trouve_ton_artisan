require('dotenv').config();

const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoint pour envoyer l'e-mail
app.post('/send-email', (req, res) => {
    const { nom, objet, message } = req.body;

    // Configuration du transporteur SMTP
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    });

    // Définition du contenu de l'e-mail
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: ``, // Adresse e-mail de destination
        subject: objet,
        text: `Nom: ${nom}\n\nMessage: ${message}`
    };

    // Envoi de l'e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send("Une erreur est survenue lors de l'envoi de l'e-mail.");
        } else {
            console.log('E-mail envoyé : ' + info.response);
            res.status(200).send('E-mail envoyé avec succès !');
        }
    });
});

// Lancement du serveur
app.listen(PORT, () => {
    console.log(`Le serveur écoute sur le port ${PORT}`);
});
