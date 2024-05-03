import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://account.mekari.com/users/sign_in?client_id=TAL-73645&return_to=L2F1dGg_Y2xpZW50X2lkPVRBTC03MzY0NSZyZXNwb25zZV90eXBlPWNvZGUmc2NvcGU9c3NvOnByb2ZpbGU%3D#!');
  await page.waitForLoadState('networkidle');
});

test.describe('talenta', () => {
    test('should clockout', async ({ page }) => {
      await page.getByLabel('Email').click();
      await page.getByLabel('Email').fill('');
      await page.getByLabel('Email').press('Tab');
      await page.getByLabel('Password').fill('');
      await page.getByRole('button', { name: 'Sign in', exact: true }).click();
      await page.goto('https://hr.talenta.co/live-attendance');
      await page.waitForLoadState('networkidle');
      await expect(page.getByRole('button', { name: 'Clock Out' })).toBeVisible();
      await page.getByPlaceholder('Text').fill('WFO');
      await page.getByRole('button', { name: 'Clock Out' }).click();
    });
});

