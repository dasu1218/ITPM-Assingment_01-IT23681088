import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('hari hari lassanayi\n');
  await page.getByText('හරි හරි ලස්සනයි').click();
  await page.locator('body').press('Alt+NumLock');
});