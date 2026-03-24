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

    //accepter les conditions
    await page.click('div.flex.h-5.w-5.items-center.justify-center.rounded.border-2');
    await page.click("span:has-text('Suivant')");
    await page.waitForTimeout(10000)
})
