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

  //Localisation
  await page.getByRole('textbox', { name: 'Saisissez votre localisation' }).fill('Dans ma tete');
  await page.getByRole('button', { name: 'Sélectionner Dérouler' }).click();
  await page.getByRole('button', { name: '🇨🇮 Côte d\'Ivoire' }).click();
  await page.getByRole('textbox', { name: 'Ex: Abidjan' }).fill("Abidjan");
  await page.getByRole('textbox', { name: 'Ex: CHU d\'angré' }).fill("cococdy");
  await page.getByRole('button', { name: 'Suivant' }).click();

  //Atouts
  await page.getByRole('button', { name: 'ELEVATOR_Ascenseur_unselected' }).click();
  await page.getByRole('button', { name: 'CRADLE_Berceau_unselected' }).click();
  await page.getByRole('button', { name: 'PRIVATE_OFFICE_Bureau privé' }).click();
  await page.getByRole('button', { name: 'HEATING_Chauffe-' }).click();
  await page.getByRole('button', { name: 'AIR_CONDITIONING_Climatisation_unselected Climatisation' }).click();
  await page.getByRole('button', { name: 'SAFE_Coffre-fort_unselected' }).click();
  await page.getByRole('button', { name: 'MEDICAL_DEVICE_Dispositive mé' }).click();
  await page.getByRole('button', { name: 'DRESSING_ROOM_Dressing_unselected Dressing' }).click();
  await page.getByRole('button', { name: 'FIRE_EXTINGUISHER_Extincteur_unselected Extincteur' }).click();
  await page.getByRole('button', { name: 'GENERATOR_Groupe électrogè' }).click();
  await page.getByRole('button', { name: 'HOME_CINEMA_Home' }).click();
  await page.getByRole('button', { name: 'JACUZZI_Jacuzzi/' }).click();
  await page.getByRole('button', { name: 'BED_Lit_unselected Lit' }).click();
  await page.getByRole('button', { name: 'EXTRA_BED_Lit supplé' }).click();
  await page.getByRole('button', { name: 'SMART_HOME_Maison connecté' }).click();
  await page.getByRole('button', { name: 'MINI_BAR_Mini bar_unselected' }).click();
  await page.getByRole('button', { name: 'BREAKFAST_Petit-dé' }).click();
  await page.getByRole('button', { name: 'ELECTRIC_CURTAINS_Rideaux é' }).click();
  await page.getByRole('button', { name: 'GAME_ROOM_Salle de' }).click();
  await page.getByRole('button', { name: 'SATELLITE_TV_Satellite' }).click();
  await page.getByRole('button', { name: 'BASEMENT_Sous-sol_unselected' }).click();
  await page.getByRole('button', { name: 'TV_Télévision_unselected Télé' }).click();
  await page.getByRole('button', { name: 'SECURITY_CAMERA_Vidéo-' }).click();
  await page.getByRole('button', { name: 'WIFI_Wi-Fi_unselected Wi-Fi' }).click();
  await page.getByRole('button', { name: 'f231c06e-2ce3-40e1-ba09-' }).click();
  await page.getByRole('button', { name: 'e3aac467-608f-4353-8b91-' }).click();
  await page.getByRole('button', { name: '255c417a-2557-4e1e-ada3-' }).click();
  await page.getByRole('button', { name: '464b23c3-eeb5-4179-b5ce-' }).click();
  await page.getByRole('button', { name: '14d19b07-887f-4c99-aa49-' }).click();
  await page.getByRole('button', { name: '237c299c-570c-425d-9776-' }).click();
  await page.getByRole('button', { name: '3d088af5-9c4c-4364-a94c-' }).click();
  await page.getByRole('button', { name: '555e3dc4-90ad-4acd-922a-' }).click();
  await page.getByRole('button', { name: '67250f33-62c3-434c-a7bc-' }).click();
  await page.getByRole('button', { name: 'a5d3d3b3-b96e-44cb-977c-' }).click();
  await page.getByRole('button', { name: 'a4a888af-4d25-4739-8fac-' }).click();
  await page.getByRole('button', { name: '530f4c8f-50cf-437e-830b-' }).click();
  await page.getByRole('button', { name: 'fcca737b-ac96-48af-8030-' }).click();
  await page.getByRole('button', { name: '2b45b36d-1fbb-49e3-bcbc-' }).click();
  await page.getByRole('button', { name: '638b3704-5674-452c-ad24-' }).click();
  await page.getByRole('button', { name: 'ccb5f5e6-9eac-4cf2-be51-' }).click();
  await page.getByRole('button', { name: '5bd24acf-7dba-40bc-9817-' }).click();
  await page.getByRole('button', { name: '07ca0711-eb2d-47cf-80a6-' }).click();
  await page.getByRole('button', { name: 'f98bd3a1-bbba-4649-bb8e-' }).click();
  await page.getByRole('button', { name: '5144e4a2-bfe9-4ccc-a845-' }).click();
  await page.getByRole('button', { name: '79fd300e-19c9-42c7-83c2-' }).click();
  await page.getByRole('button', { name: '16cf918f-1be1-4442-a922-' }).click();
  await page.getByRole('button', { name: 'e535319c-d1fd-420d-82e8-' }).click();
  await page.getByRole('button', { name: 'Suivant' }).click();

  //ajout locative
  await page.getByRole('button', { name: 'Ajouter Ajouter une nouvelle' }).click();
  const randomNumber = Math.floor(Math.random() * 1000);
  await page.getByRole('textbox', { name: 'Ex: Appartement 5B' }).fill(`maison des reves ${randomNumber}`);
  await page.getByRole('textbox', { name: 'Décrivez la locative...' }).fill("Maison crée par bots");
  await page.getByRole('button', { name: 'Sélectionner' }).first().click();
  await page.getByRole('button', { name: 'Cours communes' }).click();
  await page.getByRole('button', { name: 'Sélectionner' }).click();
  await page.getByRole('button', { name: 'Standing de Luxe' }).click();
  await page.getByRole('textbox', { name: 'Ex: 100.000' }).fill("100000");
  await page.getByRole('textbox', { name: 'Ex: 40.000' }).fill("40000");
  for (let i = 0; i < 6; i++) {
    await page.getByRole('button', { name: 'Incrémenter' }).nth(5).click();
}

  //equipement de la locative
  await page.getByRole('button', { name: 'ELEVATOR_Ascenseur_unselected' }).click();
  await page.getByRole('button', { name: 'CRADLE_Berceau_unselected' }).click();
  await page.getByRole('button', { name: 'PRIVATE_OFFICE_Bureau privé' }).click();
  await page.getByRole('button', { name: 'HEATING_Chauffe-' }).click();
  await page.getByRole('button', { name: 'AIR_CONDITIONING_Climatisation_unselected Climatisation' }).click();
  await page.getByRole('button', { name: 'SAFE_Coffre-fort_unselected' }).click();
  await page.getByRole('button', { name: 'MEDICAL_DEVICE_Dispositive mé' }).click();
  await page.getByRole('button', { name: 'DRESSING_ROOM_Dressing_unselected Dressing' }).click();
  await page.getByRole('button', { name: 'FIRE_EXTINGUISHER_Extincteur_unselected Extincteur' }).click();
  await page.getByRole('button', { name: 'GENERATOR_Groupe électrogè' }).click();
  await page.getByRole('button', { name: 'HOME_CINEMA_Home' }).click();
  await page.getByRole('button', { name: 'JACUZZI_Jacuzzi/' }).click();
  await page.getByRole('button', { name: 'BED_Lit_unselected Lit' }).click();
  await page.getByRole('button', { name: 'EXTRA_BED_Lit supplé' }).click();
  await page.getByRole('button', { name: 'SMART_HOME_Maison connecté' }).click();
  await page.getByRole('button', { name: 'MINI_BAR_Mini bar_unselected' }).click();
  await page.getByRole('button', { name: 'BREAKFAST_Petit-dé' }).click();
  await page.getByRole('button', { name: 'ELECTRIC_CURTAINS_Rideaux é' }).click();
  await page.getByRole('button', { name: 'GAME_ROOM_Salle de' }).click();
  await page.getByRole('button', { name: 'SATELLITE_TV_Satellite' }).click();
  await page.getByRole('button', { name: 'BASEMENT_Sous-sol_unselected' }).click();
  await page.getByRole('button', { name: 'TV_Télévision_unselected Télé' }).click();
  await page.getByRole('button', { name: 'SECURITY_CAMERA_Vidéo-' }).click();
  await page.getByRole('button', { name: 'WIFI_Wi-Fi_unselected Wi-Fi' }).click();
  await page.getByRole('button', { name: 'f231c06e-2ce3-40e1-ba09-' }).click();
  await page.getByRole('button', { name: 'e3aac467-608f-4353-8b91-' }).click();
  await page.getByRole('button', { name: '255c417a-2557-4e1e-ada3-' }).click();
  await page.getByRole('button', { name: '464b23c3-eeb5-4179-b5ce-' }).click();
  await page.getByRole('button', { name: '14d19b07-887f-4c99-aa49-' }).click();
  await page.getByRole('button', { name: '237c299c-570c-425d-9776-' }).click();
  await page.getByRole('button', { name: '3d088af5-9c4c-4364-a94c-' }).click();
  await page.getByRole('button', { name: '555e3dc4-90ad-4acd-922a-' }).click();
  await page.getByRole('button', { name: '67250f33-62c3-434c-a7bc-' }).click();
  await page.getByRole('button', { name: 'a5d3d3b3-b96e-44cb-977c-' }).click();
  await page.getByRole('button', { name: 'a4a888af-4d25-4739-8fac-' }).click();
  await page.getByRole('button', { name: '530f4c8f-50cf-437e-830b-' }).click();
  await page.getByRole('button', { name: 'fcca737b-ac96-48af-8030-' }).click();
  await page.getByRole('button', { name: '2b45b36d-1fbb-49e3-bcbc-' }).click();
  await page.getByRole('button', { name: '638b3704-5674-452c-ad24-' }).click();
  await page.getByRole('button', { name: 'ccb5f5e6-9eac-4cf2-be51-' }).click();
  await page.getByRole('button', { name: '5bd24acf-7dba-40bc-9817-' }).click();
  await page.getByRole('button', { name: '07ca0711-eb2d-47cf-80a6-' }).click();
  await page.getByRole('button', { name: 'f98bd3a1-bbba-4649-bb8e-' }).click();
  await page.getByRole('button', { name: '5144e4a2-bfe9-4ccc-a845-' }).click();
  await page.getByRole('button', { name: '79fd300e-19c9-42c7-83c2-' }).click();
  await page.getByRole('button', { name: '16cf918f-1be1-4442-a922-' }).click();
  await page.getByRole('button', { name: 'e535319c-d1fd-420d-82e8-' }).click();
  await page.getByRole('button', { name: 'Ajouter' }).click();

  //dupliquer 1 fois
  await page.waitForTimeout(500); 
  await page.getByRole('button').filter({ hasText: /^$/ }).nth(1).click();
  await page.locator('button').filter({ hasText: 'Dupliquer' }).click();
  await page.getByRole('button', { name: 'C\'est compris' }).click();
  await page.getByRole('button', { name: 'Continuer' }).click();

  //recapitulatif
  await page.getByRole('button', { name: 'Utilisateur Choisir un propri' }).nth(1).click();
  await page.getByRole('button', { name: 'DW Dana White 🇨🇮 (+225) 07' }).click();
  await page.getByRole('button', { name: 'Confirmer' }).click();
  await page.getByRole('button', { name: 'Publier le bien' }).click();
  await page.getByRole('button', { name: 'Confirmer' }).click();
});
