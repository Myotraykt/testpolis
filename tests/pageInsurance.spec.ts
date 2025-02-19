import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';

test('Проверка адресации раздела "Страхование машины" в секции "page"', async ({ page }) => {
  const mainPage = new MainPage(page);

  await page.goto('https://polis812.github.io/vacuu/');

  const link = await mainPage.getCarInsuranceLink();

  const expectedLink = '/car';

  expect(link).toBe(expectedLink);
})
