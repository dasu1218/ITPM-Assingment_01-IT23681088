import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ControlOrMeta+a');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('"machan mama adha class ekata yanavaa.mama ekka yanna enna puluvandha?please call before 8.00a.m. mama heta whatsapp msg ekak dhaannam oyaata.Thx\n"\n');
  await page.getByText('"මචන් මම අද class').click();
});