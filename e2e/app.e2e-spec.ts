import { Ng2CrudTemplatePage } from './app.po';

describe('ng2-crud-template App', () => {
  let page: Ng2CrudTemplatePage;

  beforeEach(() => {
    page = new Ng2CrudTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
