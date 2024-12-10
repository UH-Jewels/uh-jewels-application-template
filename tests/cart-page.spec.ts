import { test } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/payment');
  await page.getByRole('button', { name: '--' }).first().click();
  await page.getByRole('button', { name: 'Visa' }).click();
  await page.locator('div').filter({ hasText: /^Card number$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Card number$/ }).getByRole('textbox').fill('1234123123');
  await page.locator('div').filter({ hasText: /^Card number$/ }).getByRole('textbox').press('Tab');
  await page.getByPlaceholder('----').click();
  await page.getByPlaceholder('----').fill('qweqweq');
  await page.locator('div').filter({ hasText: /^Security Code$/ }).getByRole('textbox').click();
  await page.getByPlaceholder('----').dblclick();
  await page.getByPlaceholder('----').fill('09/10');
  await page.getByPlaceholder('----').press('Tab');
  await page.locator('div').filter({ hasText: /^Security Code$/ }).getByRole('textbox').fill('123');
  await page.locator('div').filter({ hasText: /^First Name$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^First Name$/ }).getByRole('textbox').fill('jarren');
  await page.locator('div').filter({ hasText: /^First Name$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Last Name$/ }).getByRole('textbox').fill('seson');
  await page.locator('div').filter({ hasText: /^Last Name$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^City$/ }).getByRole('textbox').fill('narnia');
  await page.locator('div').filter({ hasText: /^City$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Billing Address$/ }).getByRole('textbox').fill('1231-12323 lego rd');
  await page.locator('div').filter({ hasText: /^Billing Address$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^State\/Province$/ }).getByRole('textbox').fill('hawaii');
  await page.locator('div').filter({ hasText: /^State\/Province$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Billing address, line 2$/ }).getByRole('textbox').fill('bsdf');
  await page.locator('div').filter({ hasText: /^Billing address, line 2$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Zip or postal code$/ }).getByRole('textbox').fill('3242342');
  await page.locator('div').filter({ hasText: /^Zip or postal code$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Country$/ }).getByRole('textbox').fill('us');
  await page.locator('div').filter({ hasText: /^Country$/ }).getByRole('textbox').press('Tab');
  await page.locator('div').filter({ hasText: /^Phone number$/ }).getByRole('textbox').fill('8081231242423');
  await page.getByRole('button', { name: 'Continue to Shipping Form >>>' }).click();
});
