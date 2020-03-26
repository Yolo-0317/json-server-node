
// 是否ajax完成
export default function isAjaxSuccess(ajaxProps) {
  // 获取相关数据
  const { error, loading, data } = ajaxProps || {};
  // 如果「加载完成」「没有错误」「存在数据」
  if (!loading && !error && data) {
    // 请求成功
    return true;
  }
  // 请求失败「或请求中」
  return false;
}
