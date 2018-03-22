import { VideoplayerPage } from './app.po';

describe('videoplayer App', () => {
  let page: VideoplayerPage;

  beforeEach(() => {
    page = new VideoplayerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
