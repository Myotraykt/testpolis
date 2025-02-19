import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';

test('Проверка адресации раздела "Страхование путешествия" в секции "footer"', async ({ page }) => {
  const mainPage = new MainPage(page);

  await page.goto('https://polis812.github.io/vacuu/');

  const link = await mainPage.getCarInsuranceLink();

  const expectedLink = '/travel';

  expect(link).toBe(expectedLink);
})
