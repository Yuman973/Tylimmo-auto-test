const { test, expect} = require ("@playwright/test");
const { getOtp } = require('../gmail'); 
function generateEmail(){
  const random = Math.floor(Math.random() * 100000 );
  return `tylimmore+${random}@gmail.com`;
}

test('signup gid.immo', async({ page })=> {

    //lancer la recherche et accepter les cookies    
    await page.goto('https://gid.immo/fr/inscription');
    await page.waitForSelector ("button:has-text('J’ai compris')");
    await page.click("button:has-text('J’ai compris')");

    //cliquer sur je gere des biens et suivant
    await page.waitForSelector ("span:has-text('Je gère des biens')");
    await page.click ("span:has-text('Je gère des biens')");
    await page.click('button[type="submit"]');

    //clique sur agence et suivant
    await page.waitForSelector ("span:has-text('Agences immobilières / SCI')");
    await page.click ("span:has-text('Agences immobilières / SCI')");
    await page.click ('button[aria-label="btn-primary-submit"]');

    //attendre que la page charge puis rentrer le champs entreprise
    await page.waitForSelector ('input[placeholder="Nom de la société"]');
    await page.fill ('input[placeholder="Nom de la société"]', 'tyliauto');

    //liste deroulante 
    await page.getByText ('Forme juridique').click();
    await page.waitForSelector ("span:has-text('SARL')");
    await page.click ("span:has-text('SARL')");

    //Raison sociale
    await page.fill('input[placeholder="Raison sociale"]', "Raison personelle");

    //Nom du represantant
    await page.fill('input[placeholder="Nom"]', "1");

    //Prenom
    await page.fill('input[placeholder="Prénom(s)"]', "Bot");

    //cliquez sur email
    const buttons = page.locator ('button[aria-label="btn-undefined-button"]');
    await buttons.nth(2).click();

    //remplir lemail
    const email = generateEmail();
    await page.fill ('input[placeholder="Adresse email"]', email);

    //mdp et confirmation du mdp
    await page.fill('input[placeholder="Mot de passe"]', "Tylimmo2025@");
    await page.fill('input[placeholder="Vérifier le mot de passe"]', "Tylimmo2025@");

    //validation
    await page.click("span:has-text('Suivant')");

    //OTP
    await page.waitForSelector('input[maxlength="1"]');
    const otp = (await getOtp()).trim();
    console.log("OTP récupéré :", otp);
    const inputs = page.locator('input[maxlength="1"]');
    await inputs.nth(0).fill(otp[0]);
    await inputs.nth(1).fill(otp[1]);
    await inputs.nth(2).fill(otp[2]);
    await inputs.nth(3).fill(otp[3]);
    await inputs.nth(4).fill(otp[4]);
    await page.waitForTimeout(10000);

    //valider le recap
    const button = page.locator ('button[aria-label="btn-primary-button"]');
    await button.nth(1).click();
    await page.waitForTimeout(5000);
})  



