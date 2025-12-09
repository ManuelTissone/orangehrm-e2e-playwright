import { Page } from '@playwright/test'
import { BasePage } from "./base.page";
import { Locator } from '@playwright/test'

export class PimPage extends BasePage { 
    private addButton: Locator;
    private firstName: Locator;
    private lastName: Locator;
    private saveButton: Locator;

    constructor(page: Page){
        super (page);
        this.addButton = page.locator('button:has-text("Add")');
        this.firstName = page.locator('input[name="firstName"]');
        this.lastName = page.locator('input[name="lastName"]');
        this.saveButton = page.locator('button:has-text("Save")');
    }

    async navigateToPIM(): void {
        await this.navigate('/web/index.php/pim/viewEmployeeList');
    }
    async clickAdd(): void {
        await this.click(this.addButton);
    }
    async fillEmployeeInfo(firstName: string, lastName: string): void {
        await this.fillInput(this.firstName, firstName);
        await this.fillInput(this.lastName, lastName);
    }
    async saveEmployee(): void {
        await this.click(this.saveButton);
    }
}
