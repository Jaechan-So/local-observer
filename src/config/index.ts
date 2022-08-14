import convict from 'convict';
import { url } from 'convict-format-with-validator';
import path from 'path';

convict.addFormat(url);

const loadConfig = () => {
  const config = convict({
    kakao: {
      accessToken: {
        default: '',
        format: String,
      },
      authorizeCode: {
        default: '',
        format: String,
      },
      redirectUri: {
        default: '',
        format: 'url',
      },
      restApiKey: {
        default: '',
        format: String,
      },
    },
  });

  config.loadFile(path.join('src', 'config', 'default.json'));
  config.validate({ allowed: 'strict' });

  return config.getProperties();
};

export default loadConfig();
