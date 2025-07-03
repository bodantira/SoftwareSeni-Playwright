// pages/login.page.ts
import { Page, expect } from '@playwright/test';
import { LoginElements } from '../elements/login.elements';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('https://www.saucedemo.com');
  }

  async login(username: string, password: string) {
    await this.page.locator(LoginElements.usernameInput).fill(username);
    await this.page.locator(LoginElements.passwordInput).fill(password);
    await this.page.locator(LoginElements.loginButton).click();
  }

  async assertLoginSuccess() {
    await expect(this.page).toHaveURL(/.*inventory.html/);
  }

  async assertLoginFailed() {
    await expect(this.page.locator(LoginElements.errorMessage)).toBeVisible();
  }
}
