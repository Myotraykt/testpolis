import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';

test('Проверка смены языка', async ({ page }) => {
  const mainPage = new MainPage(page);

  await page.goto('https://polis812.github.io/vacuu/');

  await expect(mainPage.languageSelector).toBeVisible();

  await mainPage.switchToFinnishLanguage();

  const expectedText = 'Varo turvallisuuttasi';

  const actualText = await mainPage.getMainText();
  
  expect(actualText).toBe(expectedText);
})
