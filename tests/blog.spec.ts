import { test, expect } from '@playwright/test';
import { MainPage } from '../pages/mainPage';

test('Проверка валидности кнопки "Blog"', async ({ page }) => {
  const mainPage = new MainPage(page);
  
  await page.goto('https://polis812.github.io/vacuu/');

  await expect(mainPage.blogButton).toBeVisible();

  await mainPage.openBlog();

  const expectedUrl = "https://polis812.github.io/blog";

  await expect(page).toHaveURL(expectedUrl);
})
