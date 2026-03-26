const { test, expect } = require('@playwright/test');

test('Login GID Pro', async ({ page }) => {

  await page.goto('https://pro.gid.immo/login');

  // Attendre que le champ email soit visible
  await page.waitForSelector('input[type="email"]');

  // Remplir email
  await page.fill('input[type="email"]', 'tylimmore+10@gmail.com');

  // Remplir mot de passe
  await page.fill('input[type="password"]', 'Tylimmo2025@');

  // Cliquer sur connexion
  await page.click('button[type="submit"]');

  //Biens 
  await page.click('span:has-text("Biens")');

  //ajouter un bien 
  await page.click('span:has-text("Ajouter un bien")');

  //Type de bien
  await page.getByRole('button', { name: 'Villa-icon Villa' }).click(); 
  await page.click("span:has-text('Suivant')");
  
  //Détails 
  await page.getByRole('textbox', { name: 'Exemple : Villa' }).fill('Maison Imaginaires');
  await page.getByRole('button', { name: 'Selectionner' }).click();
  await page.getByRole('button', { name: 'Standing de Luxe' }).click();
  await page.getByRole('textbox', { name: 'Ex:' }).fill('100000');
  await page.getByRole('textbox', { name: 'Ex : Ce logement paisible' }).fill('Maison crée par les bots');
  await page.getByRole('button', { name: 'Suivant' }).click();
  await page.getByRole('button', { name: 'Ma position actuelle Flèche' }).click();

});
