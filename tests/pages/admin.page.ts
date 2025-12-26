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
        this.organizationName = page.locator('.organization-name-container input');
        this.email = page.locator('.oxd-input-group.oxd-input-field-bottom-space').filter({ hasText: 'Email' }).locator('input');
        this.saveButton = page.getByRole('button', { name: 'Save' });
    }

    async clickEdit(): Promise<void> {
        await this.click(this.editButton);
    }

   async editCompanyInfo(orgName: string, email: string): Promise<void> {
    console.log('Trying to fill Organization Name');
    await this.fillInput(this.organizationName, orgName);
    console.log('Trying to fill Email');
    await this.fillInput(this.email, email);
    }

    async saveChanges(): Promise<void> {
        await this.click(this.saveButton);
    }
}