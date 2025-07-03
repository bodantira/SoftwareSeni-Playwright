import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { CartPage } from '../pages/cart.page';
import { CheckoutPage } from '../pages/checkout.page';
import { Users } from '../data/users';

test('Full shopping flow', async ({ page }) => {
  const login = new LoginPage(page);
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await login.goto();
  await login.login(Users.valid.username, Users.valid.password);
  await inventory.addRandomItems(3);
  await inventory.goToCart();
  await cart.removeFirstItem();
  await cart.clickCheckout();
  await checkout.fillForm('John', 'Doe', '12345');
  await checkout.finish();
});
