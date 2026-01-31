import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByText('Singlish ↔ English TranslatorHelpSwitch Typing LanguageSinglishSinhala').click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama office yanna hadhanavaa.\n');
  await page.getByText('මම office යන්න හදනවා').click();
});