import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { AdminPage } from '../pages/admin.page';
import { PimPage } from '../pages/pim.page';
import { testUsers } from '../fixtures/testData';



test('Successful login', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate('/web/index.php/auth/login');
    await loginPage.login(testUsers.admin.username, testUsers.admin.password);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
});

test('Logout', async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.navigate('/web/index.php/auth/login');
    await loginPage.login(testUsers.admin.username, testUsers.admin.password);
    await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
    await loginPage.logout();
    await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
});