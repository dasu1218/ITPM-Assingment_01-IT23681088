import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ControlOrMeta+V');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('karuNaakaralaa mata podi udhavvak karanna puLuvandha?\n');
  await page.getByText('කරුණාකරලා මට පොඩි උදව්වක් කරන්න පුළුවන්ද?').click();
});