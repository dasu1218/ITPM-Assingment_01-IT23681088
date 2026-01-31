import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
  await page.goto('https://www.swifttranslator.com/');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ControlOrMeta+V');
  await page.locator('div').filter({ hasText: 'WarningSinhala characters are' }).nth(2).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ControlOrMeta+V');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oya enavadha?\n');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.locator('.w-full.h-80.p-3.rounded-lg.ring-1.ring-slate-300.whitespace-pre-wrap').click();
  await page.getByLabel('Clear').click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).click();
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).press('ControlOrMeta+V');
  await page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' }).fill('oya enavadha?\n');
  await page.getByText('ඔය එනවද?').click();
});