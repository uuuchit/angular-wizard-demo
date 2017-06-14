import { JoyaloPage } from './app.po';

describe('joyalo App', () => {
  let page: JoyaloPage;

  beforeEach(() => {
    page = new JoyaloPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
