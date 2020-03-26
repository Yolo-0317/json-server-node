/* eslint-disable import/no-unresolved */
import _ from 'lodash';

export const startDate = new Date('1970/01/01 00:00:00').getTime();
export const endDate = new Date().getTime();

export default function randomDate() {
  // 返回任意「有效时间」
  return new Date(_.random(startDate, endDate));
}
