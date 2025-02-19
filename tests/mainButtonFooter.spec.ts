import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';

test('Кнопка должна вести на главную страницу, а не на друой сайт', async ({ page }) => {
  const mainPage = new MainPage(page);

  await page.goto('https://polis812.github.io/vacuu/');

  await mainPage.clickLogoButtonFooter();

  const expectedUrl = 'https://polis812.github.io/vacuu/';
  
  await expect(page).toHaveURL(expectedUrl);
})
