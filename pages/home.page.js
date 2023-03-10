import resources from '../resources';

exports.HomePnpPage = class HomePnpPage {

  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
     this.heroHeaderTitle = page.locator('h1', {hasText: resources.heroHeader});
     this.titleMainPage = page.locator('title', {hasText: resources.homePageTitle});
     this.mainCasinoTopTable = page.locator('div.rank-num', {hasText: resources.mainCasinoTable});
     this.videoMainPage = page.getByRole('#movie_player > div.ytp-cued-thumbnail-overlay > button', { has: '[aria-label="Play"]' });
  }

  async goto() {
    await this.page.goto('https://paynplay-casinos.com');
  }

}