import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';

test('Проверка адресации раздела "Terms"', async ({ page }) => {
  const mainPage = new MainPage(page);

  await page.goto('https://polis812.github.io/vacuu/');

  const link = await mainPage.getTermsLink();

  const expectedLink = '/terms';

  expect(link).toBe(expectedLink);
})
