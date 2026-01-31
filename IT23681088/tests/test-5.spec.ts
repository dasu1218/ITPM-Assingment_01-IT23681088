import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('Alt+v');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('Alt+v');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('Alt+NumLock');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('suBha dhavasak!\n');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByText('සුභ දවසක්!').click();
});