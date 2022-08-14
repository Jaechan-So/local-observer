// TODO: extend message schema with optional fields.
export interface KakaoTalkTextMessageSchema {
  object_type: 'text';
  text: string; // NOTE: text payload cannot exceed 200 letters.
  link: string;
}

export type GetKakaoTalkTextMessagePayloadParams = Pick<
  KakaoTalkTextMessageSchema,
  'text' | 'link'
>;
