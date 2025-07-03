import { test } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { InventoryPage } from '../pages/inventory.page';
import { Users } from '../data/users';

test.describe('Select Items', () => {
  test('Select 2 items', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    await login.goto();
    await login.login(Users.valid.username, Users.valid.password);
    await inventory.addItemsByCount(2);
  });

  test('Select 3 items', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    await login.goto();
    await login.login(Users.valid.username, Users.valid.password);
    await inventory.addItemsByCount(3);
  });

  test('Select 4 items', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    await login.goto();
    await login.login(Users.valid.username, Users.valid.password);
    await inventory.addItemsByCount(4);
  });
});
