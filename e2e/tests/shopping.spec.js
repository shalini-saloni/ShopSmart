const { test, expect } = require('@playwright/test');

test('NS Store Multi-Page Routing empty image flow', async ({ page }) => {
  await page.goto('/');

  // Re-verify Header renders SVG instead of Emojis implicitly (no crash)
  await expect(page.locator('.logo')).toHaveText('NS');

  // Verify Hero constraint
  await expect(page.locator('.hero-title')).toContainText('LOOKS YOU REMEMBER');

  // Click Shop All and wait for navigation
  await page.click('text=SHOP ALL');
  await page.waitForURL('**/shop');

  // Verify dynamic route renders "Shop All" title
  await expect(page.locator('.shop-title')).toContainText('Shop All');

  // Navigate directly to Women category
  await page.click('text=WOMEN');
  await page.waitForURL('**/shop/women');

  // Confirm Route Parameter update
  await expect(page.locator('.shop-title')).toContainText('women', { ignoreCase: true });
});
