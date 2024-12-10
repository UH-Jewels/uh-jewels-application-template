import { test } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/payment');
  await page.locator('div').filter({ hasText: /^Card number$/ }).getByRole('textbox').click();
  await page.getByRole('button', { name: '--' }).first().click();
  await page.getByRole('button', { name: 'Visa' }).click();
  await page.locator('div').filter({ hasText: /^Card number$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Card number$/ }).getByRole('textbox').fill('123123123123');
  await page.getByPlaceholder('----').click();
  await page.getByPlaceholder('----').fill('09123');
  await page.getByPlaceholder('----').press('Tab');
  await page.getByPlaceholder('----').click();
  await page.getByPlaceholder('----').press('ArrowRight');
  await page.getByPlaceholder('----').press('ArrowRight');
  await page.getByPlaceholder('----').fill('0912');
  await page.locator('div').filter({ hasText: /^Security Code$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Security Code$/ }).getByRole('textbox').fill('123');
  await page.locator('div').filter({ hasText: /^First Name$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^First Name$/ }).getByRole('textbox').fill('jarren');
  await page.locator('div').filter({ hasText: /^First Name$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Last Name$/ }).getByRole('textbox').fill('seson');
  await page.locator('div').filter({ hasText: /^Last Name$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^City$/ }).getByRole('textbox').fill('kailua');
  await page.locator('div').filter({ hasText: /^City$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Billing Address$/ }).getByRole('textbox').fill('hssdfsdf rd');
  await page.locator('div').filter({ hasText: /^Billing Address$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^State\/Province$/ }).getByRole('textbox').fill('hawaii');
  await page.locator('div').filter({ hasText: /^State\/Province$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Billing address, line 2$/ }).getByRole('textbox').fill('apt c');
  await page.locator('div').filter({ hasText: /^Billing address, line 2$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Zip or postal code$/ }).getByRole('textbox').fill('sdfse');
  await page.locator('div').filter({ hasText: /^Zip or postal code$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Zip or postal code$/ }).click();
  await page.locator('div').filter({ hasText: /^Country$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Country$/ }).getByRole('textbox').fill('united states');
  await page.locator('div').filter({ hasText: /^Country$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Phone number$/ }).getByRole('textbox').fill('808232124');
  await page.getByRole('button', { name: 'Continue to Shipping Form >>>' }).click();
});
