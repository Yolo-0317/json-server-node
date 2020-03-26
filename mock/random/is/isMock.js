/* eslint-disable import/no-unresolved */
import _ from 'lodash';

import getRouteSearch from '../url/getRouteSearch';

// 是否返回mock数据
export default function isMock() {
  return _.get(getRouteSearch(), 'mock');
}
