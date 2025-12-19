import { Page } from '@playwright/test'
import { BasePage } from "./base.page";
import { Locator } from '@playwright/test'

export class PimPage extends BasePage {
    private addButton: Locator;
    private firstName: Locator;
    private lastName: Locator;
    private saveButton: Locator;

    constructor(page: Page) {
        super(page);
        this.addButton = page.getByRole('link', { name: 'Add Employee' });
        this.firstName = page.getByRole('textbox', { name: 'First Name' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name' });
        this.saveButton = page.getByRole('button', { name: 'Save' });
    }

    async navigateToPIM(): Promise<void> {
        await this.navigate('/web/index.php/pim/viewEmployeeList');
    }

    async clickAdd(): Promise<void> {
        await this.click(this.addButton);
    }

    async fillEmployeeInfo(firstName: string, lastName: string): Promise<void> {
        await this.fillInput(this.firstName, firstName);
        await this.fillInput(this.lastName, lastName);
    }

    async saveEmployee(): Promise<void> {
        await this.click(this.saveButton);
    }
}