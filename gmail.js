const fs = require('fs');
const path = require ("path");
const { google } = require('googleapis');
const { resolve } = require('dns');

function extractBody(payload) {
  if (!payload) return null;

  if (payload.mimeType === "text/plain" && payload.body?.data) {
    return payload.body.data;
  }

  if (payload.mimeType === "text/html" && payload.body?.data) {
    return payload.body.data;
  }

  if (payload.parts) {
    for (const part of payload.parts) {
      const result = extractBody(part);
      if (result) return result;
    }
  }

  return null;
}

async function getOtp() {
  const credentialsPath = path.join(__dirname, 'credentials.json');
  const tokenPath = path.join(__dirname, 'token.json');

  const credentials = JSON.parse(fs.readFileSync(credentialsPath));
  const token = JSON.parse(fs.readFileSync(tokenPath));

  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  oAuth2Client.setCredentials(token);

  const gmail = google.gmail({ version: 'v1', auth: oAuth2Client });

  await new Promise(resolve => setTimeout(resolve, 10000));
  const res = await gmail.users.messages.list({
    userId: 'me',
    maxResults: 10,
    q: 'from:info@tylimmo.com'
  });

  const messages = res.data.messages || [];
  if (messages.length === 0) throw new Error("Aucun mail OTP trouvé !");

  // tri par date, du plus récent au plus ancien
  messages.sort((a, b) => b.internalDate - a.internalDate);

  const message = await gmail.users.messages.get({
    userId: 'me',
    id: messages[0].id,
  });

  const bodyData = extractBody(message.data.payload);

  if (!bodyData) throw new Error("Impossible d'extraire le contenu du mail.");

  const body = Buffer.from(bodyData, 'base64').toString('utf-8');

  console.log("MAIL BODY:");
  console.log(body);

  const otpMatch = body.match(/\d{4,6}/);

  if (!otpMatch) throw new Error("OTP introuvable dans le mail.");

  console.log("OTP trouvé :", otpMatch[0]);

  return otpMatch[0];
}

module.exports = { getOtp };
