/* eslint-disable import/no-unresolved */
import _ from 'lodash';

// 是否ajax超时
export default function isAjaxPropsTimeoutError(propVal) {
  const { message } = _.get(propVal, 'error');
  return _.includes(_.toUpper(message), 'TIMEOUT');
}
