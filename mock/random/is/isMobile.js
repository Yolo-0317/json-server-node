export const mobileRegex = /^1[3456789]\d{9}$/;

/**
 * 判断手机号，是否有效
 * @export
 * @param {string} mobile 手机号码
 * @returns
 */
export default function isMobile(mobile) {
  return mobileRegex.test(mobile);
}
