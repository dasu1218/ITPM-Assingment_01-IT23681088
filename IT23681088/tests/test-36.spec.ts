import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('asdfghjkl\n');
  await page.getByText('අස්ඩ්ෆ්ග්හ්ජ්ක්ල්').click();
  await page.getByText('මම').click();
});