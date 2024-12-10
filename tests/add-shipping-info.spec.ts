import { test } from '@playwright/test';

test.use({
  storageState: 'john-auth.json',
});

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/shipping');
  await page.locator('input[name="firstName"]').click();
  await page.locator('input[name="firstName"]').fill('jarren');
  await page.locator('input[name="firstName"]').press('Tab');
  await page.locator('input[name="lastName"]').fill('seson');
  await page.locator('input[name="lastName"]').press('Tab');
  await page.locator('input[name="address1"]').fill('34-234 legoland rd');
  await page.locator('input[name="address1"]').press('Tab');
  await page.locator('input[name="address2"]').fill('apt c');
  await page.locator('input[name="address2"]').press('Tab');
  await page.locator('input[name="city"]').fill('narnia');
  await page.locator('input[name="city"]').press('Tab');
  await page.locator('input[name="zip"]').fill('92131');
  await page.locator('input[name="zip"]').press('Tab');
  await page.locator('input[name="state"]').fill('hawaii');
  await page.locator('input[name="state"]').press('Tab');
  await page.locator('input[name="country"]').fill('united states');
  await page.getByRole('button', { name: 'Submit' }).click();
});
