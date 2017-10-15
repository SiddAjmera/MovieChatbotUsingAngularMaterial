import { MovieChatbotPage } from './app.po';

describe('movie-chatbot App', () => {
  let page: MovieChatbotPage;

  beforeEach(() => {
    page = new MovieChatbotPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
