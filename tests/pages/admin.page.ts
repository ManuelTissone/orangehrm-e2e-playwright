import { Page } from '@playwright/test'
import { BasePage } from "./base.page";
import { Locator } from '@playwright/test'

export class AdminPage extends BasePage {
    private editButton: Locator;
    private organizationName: Locator;
    private email: Locator;
    private saveButton: Locator;
        
    constructor(page: Page){
        super (page);
        this.editButton = page.locator('span.oxd-switch-input');
        this.organizationName = page.locator('.organization-name-container input');
        //Se lee: "dame el label con texto Email, sube un nivel, luego busca el input".
        this.email = page.locator('label:has-text("Email")').locator('..').locator('input');
        this.saveButton = page.locator('//button[contains(text(), "Save")]');
    }
    
    async clickEdit(): void {
        await this.click(this.editButton);
    }
    async editCompanyInfo(orgName: string, email: string): void {
        await this.fillInput(this.organizationName, orgName);
        await this.fillInput(this.email, email);
    }
    async saveChanges(): void {
        await this.click(this.saveButton);
    }

}