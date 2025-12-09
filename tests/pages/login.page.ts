import { Page } from '@playwright/test'
import { BasePage } from "./base.page";
import { Locator } from '@playwright/test'


export class LoginPage extends BasePage {
    private usernameInput: Locator;
    private passwordInput: Locator;
    private loginButton: Locator;
    private logoutButton: Locator;
    constructor(page: Page) {
        super(page);
        this.usernameInput = page.locator('input[name="username"]');
        this.passwordInput = page.locator('input[name="password"]');
        this.loginButton = page.locator('button[type="submit"]');
        this.logoutButton = page.locator('a.oxd-userdropdown-link[role="menuitem"]');
    }

    
    async login(username: string, password: string): void {
        await this.fillInput(this.usernameInput, username);
        await this.fillInput(this.passwordInput, password);
        await this.click(this.loginButton);
    }
    async logout(): void {
        await this.click(this.logoutButton);
    }
}