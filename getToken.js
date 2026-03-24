const fs = require('fs');
const { google } = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/gmail.readonly'];
const CREDENTIALS_PATH = 'credentials.json';
const TOKEN_PATH = 'token.json';

// Lire les credentials
const content = fs.readFileSync(CREDENTIALS_PATH);
const credentials = JSON.parse(content);
const { client_secret, client_id, redirect_uris } = credentials.installed;

const oAuth2Client = new google.auth.OAuth2(
  client_id, client_secret, redirect_uris[0]
);

// Vérifier si token existe
if (fs.existsSync(TOKEN_PATH)) {
  const token = fs.readFileSync(TOKEN_PATH);
  oAuth2Client.setCredentials(JSON.parse(token));
  console.log("Token existant chargé !");
} else {
  // Générer le lien OAuth
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });
  console.log('Ouvre ce lien dans ton navigateur et copie le code :\n', authUrl);

  // Attendre le code
  const readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.question('Entre le code ici : ', (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error('Erreur pour récupérer le token :', err);
      fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
      console.log('Token enregistré dans token.json');
    });
  });
}
