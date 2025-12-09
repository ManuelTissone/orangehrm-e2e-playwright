import { Page } from '@playwright/test'
import { Locator } from '@playwright/test'

export class BasePage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    
    async click(locator: Locator): void {
        await locator.click();
    }
    async fillInput(locator: Locator, text: string): void {
        await locator.fill(text);
    }
    async getText(locator: Locator): string{
        return await locator.textContent()
    }
    async waitForElement(locator: Locator): void {
        await locator.waitFor({ state: 'visible'})
    }
    async navigate(path: string): void { 
        await this.page.goto((process.env.BASE_URL??'')+ path);
    }
    async isVisible(locator: Locator): boolean {
        return await locator.isVisible();
    }
}