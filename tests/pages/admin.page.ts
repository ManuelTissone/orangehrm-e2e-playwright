import { Page } from '@playwright/test'
import { BasePage } from "./base.page";
import { Locator } from '@playwright/test'
export class AdminPage extends BasePage {
    private editButton: Locator;
    private organizationName: Locator;
    private email: Locator;
    private saveButton: Locator;

    constructor(page: Page) {
        super(page);
        this.editButton = page.locator('span.oxd-switch-input');
        this.organizationName = page.getByRole('textbox', { name: 'Organization Name' });
        this.email = page.getByLabel('Email');
        this.saveButton = page.getByRole('button', { name: 'Save' });
    }

    async clickEdit(): Promise<void> {
        await this.click(this.editButton);
    }

    async editCompanyInfo(orgName: string, email: string): Promise<void> {
        await this.fillInput(this.organizationName, orgName);
        await this.fillInput(this.email, email);
    }

    async saveChanges(): Promise<void> {
        await this.click(this.saveButton);
    }
}