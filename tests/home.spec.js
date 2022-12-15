const { test, expect } = require('@playwright/test');
const { HomePnpPage } = require('../pages/home.page');
import resources from '../resources';

test('H1 heading in hero on main page should be proper', async ({ page }) => {
  const homePnp = new HomePnpPage(page);
  await homePnp.goto();
  await expect(homePnp.heroHeaderTitle).toHaveText(resources.heroHeader);
});

test("Top 30 table should have at least 30 items", async({ page}) => {
  const homePnp = new HomePnpPage(page);
  await homePnp.goto();
  await expect(homePnp.mainCasinoTopTable).toHaveText(resources.mainCasinoTable);
});