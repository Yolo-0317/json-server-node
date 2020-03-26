
export default function isAjaxPropsInitLoading(propVal) {
  const { data, responseId } = propVal || {};
  if (data === false && !responseId) {
    return true;
  }
  return false;
}
