import userAgent from "../window/userAgent";

// 是否是android手机
export default function isAndroid() {
  return /^.*android.*$/.test(userAgent);
}

// 是否是iphone手机
export function isIphone() {
  return /^.*iphone.*$/.test(userAgent);
}

// 是否是微软手机
export function isWP() {
  return /^.*window.*$/.test(userAgent);
}
