const {test, expect} = require('@playwright/test');
require("../data/login.json");

test('Login Test', async ({ page }) => {
    await page.goto(data.url);
    await page.fill('#username',process.env.USER_NAME);
    await page.fill('#password',process.env.PASSWORD);
    await page.click('#login-btn');
    await expect(page).toHaveURL(/dashboard/);
});