import { Page } from '@playwright/test'
import { BasePage } from "./base.page";
import { Locator } from '@playwright/test'
export class LoginPage extends BasePage {
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private logoutButton: Locator;
    private userDropdown: Locator;

    constructor(page: Page) {
        super(page);
        this.usernameInput = page.getByRole('textbox', { name: 'Username' });
        this.passwordInput = page.getByRole('textbox', { name: 'Password' });
        this.loginButton = page.getByRole('button', { name: 'Login' });
        this.logoutButton = page.getByRole('menuitem', { name: 'Logout' });
        this.userDropdown = page.locator('.oxd-userdropdown-tab');
    }

    async login(username: string, password: string): Promise<void> {
        await this.fillInput(this.usernameInput, username);
        await this.fillInput(this.passwordInput, password);
        await this.click(this.loginButton);
    }

    async logout(): Promise<void> {
        await this.click(this.userDropdown);
        await this.click(this.logoutButton);
    }
}