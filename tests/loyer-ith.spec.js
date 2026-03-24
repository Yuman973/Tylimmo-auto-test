const { test, expect } = require('@playwright/test');

test('loyer-ith', async ({ page }) => {

    //aller sur la page et accepter les cookies
    await page.goto('https://gid.immo/fr');
    await page.waitForSelector ("button:has-text('J’ai compris')");
    await page.click("button:has-text('J’ai compris')");

    //cliquez sur les trois bars en haut a droite
    const buttons = page.locator ('button[aria-label="btn-undefined-undefined"]');
    await buttons.nth(1).click();

    //cliquez sur connexion
    await page.click("span:has-text('Connexion')");

    //cliquez sur email
    await page.click("span:has-text('Email')");

    // Attendre que le champ email soit visible
    await page.waitForSelector('input[type="email"]');

    // Remplir email
    await page.fill('input[type="email"]', 'tylimmore+25@gmail.com');

    // Remplir mot de passe
    await page.fill('input[type="password"]', 'Tylimmo2025@');

    // Cliquer sur connexion
    await page.click('button[type="submit"]');

    //cliquez sur le profil en haut a droite
    const button = page.locator ('button[aria-label="btn-undefined-undefined"]');
    await button.nth(1).click();

    //cliquer sur MON PROFIL 
    await page.click("span:has-text('Mon profil')");

    //mes loyers
    await page.click("span:has-text('Mes Loyers')");

    //payer mon loyer
    await page.getByRole('button', { name: 'Payer mon loyer' }).click(); 


    // Attendre que l'URL change (connexion réussie)
    await expect(page).not.toHaveURL(/login/);

});
