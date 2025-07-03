import { Page } from '@playwright/test';
import { InventoryElements } from '../elements/inventory.elements';

export class InventoryPage {
  constructor(private page: Page) {}

  async   addItemsByCount(count: number) {
    const items = await this.page.locator(InventoryElements.itemAddToCartButtons);
    for (let i = 0; i < count; i++) {
      await items.nth(i).click();
    }
  }

  async addRandomItems(count: number) {
    const total = await this.page.locator(InventoryElements.itemAddToCartButtons).count();
    const indices = [...Array(total).keys()].sort(() => 0.5 - Math.random()).slice(0, count);
    for (const i of indices) {
      await this.page.locator(InventoryElements.itemAddToCartButtons).nth(i).click();
    }
  }

  async goToCart() {
    await this.page.locator(InventoryElements.cartIcon).click();
  }
}
