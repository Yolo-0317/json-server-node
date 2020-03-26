import location from '../window/location';
// 是否为开发环境
export default function isDev() {
  const { hostname } = location();
  return 'localhost,127.0.0.1'.indexOf(hostname) > -1;
}
