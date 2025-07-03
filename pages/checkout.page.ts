import { Page, expect } from '@playwright/test';
import { CheckoutElements } from '../elements/checkout.elements';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillForm(firstName: string, lastName: string, zip: string) {
    await this.page.locator(CheckoutElements.firstName).fill(firstName);
    await this.page.locator(CheckoutElements.lastName).fill(lastName);
    await this.page.locator(CheckoutElements.zipCode).fill(zip);
    await this.page.locator(CheckoutElements.continueButton).click();
  }

  async finish() {
    await this.page.locator(CheckoutElements.finishButton).click();
    await expect(this.page).toHaveURL(/checkout-complete.html/);
  }
}
