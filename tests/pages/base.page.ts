import { Page } from '@playwright/test'
import { Locator } from '@playwright/test'

export class BasePage {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }
    
    async click(locator: Locator): Promise<void> {
        await locator.click();
    }
    async fillInput(locator: Locator, text: string): Promise<void> {
        await locator.fill(text);
    }
    async getText(locator: Locator): Promise<string | null> {
        return await locator.textContent()
    }
    async waitForElement(locator: Locator): Promise<void> {
        await locator.waitFor({ state: 'visible'})
    }
    async navigate(path: string): Promise<void> {
        const baseUrl = process.env.BASE_URL || 'https://opensource-demo.orangehrmlive.com';
        await this.page.goto(baseUrl + path);
    }
    async isVisible(locator: Locator): Promise<boolean> {
        return await locator.isVisible();
    }
}