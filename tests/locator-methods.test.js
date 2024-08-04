import { test } from '@playwright/test';

test('check method test', async ({ page }) => {
  await page.goto('https://practice.cydeo.com/checkboxes');
    const checkbox1 = page.locator("//input[@id='box1']");
    const checkbox2 = page.locator("//input[@id='box2']");
    await checkbox1.check();
  await checkbox2.uncheck();

});


test('selectOptions method test: can be used for dropdowns', async ({ page }) => {

  await page.goto('https://practice.cydeo.com/dropdown');


  const simpleDropdown = page.locator("id=dropdown");

 await simpleDropdown.selectOption({label: 'Option 1' });  

  const options = await simpleDropdown.evaluate((select) => {
    return Array.from(select.options).map(option => ({
      text: option.text,
      value: option.value
    }));
  });

  console.log(options);

});