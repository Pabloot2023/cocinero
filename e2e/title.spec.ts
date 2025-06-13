import { expect, test } from '@playwright/test';

test('should have correct title', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/cocineroS/);
}); 