import _ from 'lodash';
import { config } from '../initialize';

// 默认超时「5秒」
export const defTimeout = _.get(config, 'is.isAjaxPropsTimeout.timeoutMillis', 5000);
// 是否ajax超时
export default function isAjaxTimeout(propVal, timeout = defTimeout) {
  const now = _.now();
  return now - _.get(propVal, 'start', now) > timeout;
}
