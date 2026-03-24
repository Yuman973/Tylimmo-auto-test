const { test, expect } = require('@playwright/test');

test('Login GID Pro', async ({ page }) => {

  await page.goto('https://pro.gid.immo/login');

  // Attendre que le champ email soit visible
  await page.waitForSelector('input[type="email"]');

  // Remplir email
  await page.fill('input[type="email"]', 'tylimmore+20@gmail.com');

  // Remplir mot de passe
  await page.fill('input[type="password"]', 'Tylimmo2025@');

  // Cliquer sur connexion
  await page.click('button[type="submit"]');

  // Attendre que l'URL change (connexion réussie)
  await expect(page).not.toHaveURL(/login/);

});
