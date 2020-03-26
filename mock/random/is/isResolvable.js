/**
 * 判断「当前项目」是否存在「指定库」如：isResolvable('lodash')
 * @param {string} moduleId 库名
 * @param {object} options 选项 {paths: ['bar']} 指定路径
 */
export default function isResolvable(moduleId, options) {
  // 如果库名称「不是字符串」
  if (typeof moduleId !== 'string') {
    return false;
  }

  try {
    // 加载指定库
    require.resolve(moduleId, options);
    // 加载成功，返回true
    return true;
  } catch (err) {
    // 加载失败，返回false
    return false;
  }
}
