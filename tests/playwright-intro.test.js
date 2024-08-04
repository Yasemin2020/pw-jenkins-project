import test from "@playwright/test";

test('Search playwright on google', async({page})=>{
 
 await page.goto("http://www.google.com");


 const searchBox=  page.locator("//textarea[@class='gLFyf']");

await searchBox.fill('Playwright Automation');

 await searchBox.press('Enter')


});
