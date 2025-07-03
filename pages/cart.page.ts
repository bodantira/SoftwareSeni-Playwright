import { Page } from '@playwright/test';
import { CartElements } from '../elements/cart.elements';

export class CartPage {
  constructor(private page: Page) {}

  async removeFirstItem() {
    const buttons = this.page.locator(CartElements.removeButton);
    if (await buttons.count() > 0) {
      await buttons.nth(0).click();
    }
  }

  async clickCheckout() {
    await this.page.locator(CartElements.checkoutButton).click();
  }
}
