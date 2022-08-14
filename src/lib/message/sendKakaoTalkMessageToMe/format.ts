import qs from 'qs';

import { GetKakaoTalkTextMessagePayloadParams } from './types';

export const getKakaoTalkTextMessagePayload = ({
  text,
  link,
}: GetKakaoTalkTextMessagePayloadParams): string =>
  qs.stringify({
    template_object: JSON.stringify({
      object_type: 'text',
      text,
      link,
    }),
  });
