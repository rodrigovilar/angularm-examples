import { MetaobjectsPage } from './app.po';

describe('metaobjects App', function() {
  let page: MetaobjectsPage;

  beforeEach(() => {
    page = new MetaobjectsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Sample component');
  });
});
