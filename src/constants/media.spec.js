import * as media from './media';
describe('constants - media', () => {
  it('should match snapshot', () => {
    expect(media).toMatchSnapshot();
  });
});