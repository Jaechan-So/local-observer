import config from './index';

describe('config', () => {
  test('kakao', () => expect(config.kakao).toBeDefined());
});
