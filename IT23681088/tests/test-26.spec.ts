import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('"adha mama university ekata gihin final semester exam ekak liyanna sidhdha vuunaa.\nudhesanama ledak nethath mata podi bayak saha stress ekak thiyenavaa kiyala hithuna.\nexam hall ekata gihin seat number eka hoyagena idhagena,\npaper eka labunama question tika kiyavalaa therum ganna podi kaalayak gaththaa.\nsamahara questions hari lesi vunath namuth samahara prashna tikak amaaru unaa.\n amathak una nisaa kalaya hariyata kalamanakaranaya karanna oona vuuvaa.\nadha exam eka hondha vidhihata livvaa kiyala\npaper eka ivara karala eliyata aavoth loku sathutak hithata avaa.\n"\n');
  await page.getByText('"අද මම university එකට ගිහින්').click();
});