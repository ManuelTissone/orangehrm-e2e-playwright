import { Page } from '@playwright/test'
import { BasePage } from "./base.page";
import { Locator } from '@playwright/test'

export class PimPage extends BasePage {
    private addButton: Locator;
    private firstName: Locator;
    private lastName: Locator;
    private saveButton: Locator;
    private searchEmployeeName: Locator;
    private searchButton: Locator;
    private editButton: Locator;
    private saveEditButton: Locator;
    private deleteButton: Locator;
    private confirmDeleteButton: Locator;

    constructor(page: Page) {
        super(page);
        this.addButton = page.getByRole('link', { name: 'Add Employee' });
        this.firstName = page.getByRole('textbox', { name: 'First Name' });
        this.lastName = page.getByRole('textbox', { name: 'Last Name' });
        this.saveButton = page.getByRole('button', { name: 'Save' });
        this.searchEmployeeName = page.getByRole('textbox', { name: 'Type for hints...' }).first();
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.editButton = page.getByRole('button', { name: '' }).first();
        this.saveEditButton = page.getByRole('button', { name: 'Save' }).last();
        this.deleteButton = page.getByRole('button', { name: '' }).first()
        this.confirmDeleteButton = page.getByRole('button', { name: ' Yes, Delete' });
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
    async saveEdit(): Promise<void> {
        await this.click(this.saveEditButton);
    }
    async searchEmployee(employeeName: string): Promise<void> {
        await this.typeInput(this.searchEmployeeName, employeeName);
        await this.click(this.searchButton);
    }
    async clickEditEmployee(): Promise<void> {
        await this.click(this.editButton);
    }
    async deleteEmployee(): Promise<void> {
        await this.click(this.deleteButton);
    }

    async confirmDelete(): Promise<void> {
        await this.click(this.confirmDeleteButton);
    }
}