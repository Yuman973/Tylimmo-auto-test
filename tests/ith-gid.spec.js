const { test, expect} = require ("@playwright/test");
const { getOtp } = require('../gmail'); 
function generateEmail(){
  const random = Math.floor(Math.random() * 100000 );
  return `tylimmore+${random}@gmail.com`;
}

test ('ith', async({ page }) => {
     //lancer la recherche et accepter les cookies    
    await page.goto('https://gid.immo/fr/ith?modal=true&modalEntity=ith-inscription&modalId=ith-inscription&modalSize=lg');
    await page.waitForSelector ("button:has-text('J’ai compris')");
    await page.click("button:has-text('J’ai compris')");

    //fermer la video
    const closeBtn = page.locator('button:has(svg.lucide-x)');
    await closeBtn.click();

    //suivant 
    await page.waitForSelector("span:has-text('Suivant')");
    await page.click("span:has-text('Suivant')");

    //accepter les conditions d'adhésion
    await page.click('span:has-text("J\'accepte les conditions d\'adhésion")');
    
    //Cliquer sur démarrez
    await page.click ("span:has-text('Démarrer')");
    await page.waitForSelector('input[placeholder="Ex : Kouakou"]');

    //Civilité
    await page.click("span:has-text('Sélectionner')")
    await page.getByText('Monsieur').click();
  
    //nom
    await page.fill('input[placeholder="Ex : Kouakou"]', 'ITH');

    //prenom
    await page.fill('input[placeholder="Ex : Abou Francis Ernest"]', 'BOT' );

    //date de naissance
    await page.fill('input[placeholder="JJ / MM / AAAA"]', '20102000');

    //cliquer sur email 
    await page.click('button.bg-white.text-primary-600');

    // cliquez sur email 
    await page.click('span:has-text("Email")');

    //remplir lemail
    const email = generateEmail();
    await page.fill ('input[placeholder="exemple@email.com"]', email);

    //mdp et confirmation du mdp
    await page.fill('input[placeholder="Entrez votre mot de passe"]', "Tylimmo2025@");
    await page.fill('input[placeholder="Confirmez votre mot de passe"]', "Tylimmo2025@");

    //accepter les conditions et valider
    await page.click('div.flex.h-5.w-5.items-center.justify-center.rounded.border-2');
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

    //Finaliser la création
    await page.waitForSelector('span:has-text("Créer")');
    await page.click('span:has-text("Créer")');

    //Payer
    await page.click('button:has-text("Payer maintenant")');
    //Attendre que l'iframe apparaisse dans le DOM
    const frameLocator = await page.waitForSelector('iframe[title="Page de paiement"]', { state: 'attached' });

    //Récupérer le contentFrame
    const content = await frameLocator.contentFrame();

    //Vérifier que le contentFrame existe
    if (!content) throw new Error("L'iframe n'est pas encore prête !");

    //tu peux cliquer / fill dans l'iframe
    await content.waitForSelector("button:has-text('Orange money')");
    await content.click("button:has-text('Orange money')");
    await content.click("button:has-text('Orange money')");
    await content.fill('input[placeholder="Numéro de téléphone"]', "0102030405");
    await content.fill('input[placeholder="0000"]', "0000");
    await content.click("span:has-text('En procédant au paiement, vous acceptez les')");
    await content.click('button:has-text("Effectuer le paiement")');

    //la suite est chiante faut quil ouvre le FAP se connecte avec un compte valider le KYC 

})
