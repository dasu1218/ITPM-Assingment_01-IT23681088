import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click({
    modifiers: ['ControlOrMeta']
  });
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('ela machan! supiri!!\n');
  await page.getByText('එල මචන්! සුපිරි!!').click();
});