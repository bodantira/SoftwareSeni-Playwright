import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { Users } from '../data/users';

test.describe('SauceDemo Login', () => {
  test('Login with valid credentials', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(Users.valid.username, Users.valid.password);
    await loginPage.assertLoginSuccess();
  });
  test('Login with invalid', async({page}) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login(Users.invalidData.username, Users.invalidData.password)
    await loginPage.assertLoginFailed(Users.invalidData.error);

  });
});
