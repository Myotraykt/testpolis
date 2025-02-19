import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';

test('Проверка валидности формы Email', async ({ page }) => {
  const mainPage = new MainPage(page);
  
  await page.goto('https://polis812.github.io/vacuu/');

  await mainPage.enterEmail('');

  await mainPage.clickSubmitButton();

  await expect(mainPage.submitArea).not.toBeVisible();
})
