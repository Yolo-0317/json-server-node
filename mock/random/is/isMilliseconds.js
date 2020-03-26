/* eslint-disable import/no-unresolved */
import _ from 'lodash';

// 有效开始时间
export const startDate = new Date('1970/01/01 00:00:00').getTime();
// 有效结束时间
export const endDate = new Date('99999/12/31 23:59:59').getTime();

/**
 * 是否为「有效」毫秒数
 * @export
 * @param {int} millis 毫秒数
 * @returns true 有效毫秒数 | false 非毫秒数
 */
export default function isMilliseconds(millis) {
  // 如果是整型，并且在「有效时间范围」
  return _.isInteger(millis) && _.inRange(millis, startDate, endDate);
}
