import axios from 'axios';

import { getKakaoTalkTextMessagePayload } from './format';
import {
  GetKakaoTalkTextMessagePayloadParams,
  KakaoTalkTextMessageSchema,
} from './types';

import config from 'config';

const KAKAOTALK_SEND_TO_ME_CONFIG = {
  host: 'https://kapi.kakao.com',
  url: '/v2/api/talk/memo/default/send',
};

export const sendKakaoTalkMessageToMe = async (
  params: GetKakaoTalkTextMessagePayloadParams,
) =>
  axios.post(
    KAKAOTALK_SEND_TO_ME_CONFIG.url,
    getKakaoTalkTextMessagePayload(params),
    {
      baseURL: KAKAOTALK_SEND_TO_ME_CONFIG.host,
      headers: {
        Authorization: `Bearer ${config.kakao.accessToken}`,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

export type {
  GetKakaoTalkTextMessagePayloadParams,
  KakaoTalkTextMessageSchema,
};
