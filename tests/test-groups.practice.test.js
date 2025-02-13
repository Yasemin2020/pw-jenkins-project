import { test, expect } from '@playwright/test';

test.describe('Practice cydeo @group2', async () => {
    test.beforeEach(async({page})=> {
        await page.goto("https://practice.cydeo.com/");
      
    })
    test.afterEach(async({page})=> {
        
    })
    test('Get the title of the page', async ({ page }) => {
      //  await page.goto("https://practice.cydeo.com/");
        let actualTitle = await page.title();
        let expectedTitle = "Practice";
        expect(actualTitle).toEqual(expectedTitle);

    });

    test('Get the URL of the page', async ({ page }) => {

        let actualUrl = page.url();
        expect(actualUrl).toContain("cydeo");
        

    });

    test('Click the A/B testing link', async ({ page }) => {
        let abTestingLink= page.getByText("A/B Testing");
        await expect(abTestingLink).toBeEnabled();
        await abTestingLink.click();
       

    });
});