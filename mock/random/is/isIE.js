// 判断当前环境是否为IE浏览器
export default function isIE() {
  return !!window.ActiveXObject || "ActiveXObject" in window;
}
