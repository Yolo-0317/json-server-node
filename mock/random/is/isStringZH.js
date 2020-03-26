export const zhRegex = /^[\u4e00-\u9fa5]+$/;

export default function isStringZH(str) {
  return zhRegex.test(str);
}
