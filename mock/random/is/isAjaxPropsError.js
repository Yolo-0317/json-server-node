/* eslint-disable import/no-unresolved */
import _ from 'lodash';

// 是否ajax超时
export default function isAjaxPropsError(propVal) {
  return _.get(propVal, 'error');
}
