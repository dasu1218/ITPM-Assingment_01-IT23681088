import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('mama yaanna hadhanavaa, namuth kaalaya madhi\n');
  await page.getByText('මම යාන්න හදනවා, නමුත් කාලය මදි').click();
});