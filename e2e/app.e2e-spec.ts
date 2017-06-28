import { DfserviceBoilerplatePage } from './app.po';

describe('dfservice-boilerplate App', () => {
  let page: DfserviceBoilerplatePage;

  beforeEach(() => {
    page = new DfserviceBoilerplatePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
