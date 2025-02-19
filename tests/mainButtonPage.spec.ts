import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';

test('Кнопка должна вести на главную страницу', async ({ page }) => {
  const mainPage = new MainPage(page);

  await page.goto('https://polis812.github.io/vacuu/');

  await mainPage.clickLogoButtonPage();

  const expectedUrl = 'https://polis812.github.io/vacuu/';
  
  await expect(page).toHaveURL(expectedUrl);
})
