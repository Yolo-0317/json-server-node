/* eslint-disable import/no-unresolved */
import _ from 'lodash';

/**
 * 随机一个「min - max」整型值
 * @param {int} min 最小值
 * @param {max} max 最大值
 */
export default function randomSafeInteger(min, max) {
  return _.random(
    min || Number.MIN_SAFE_INTEGER,
    max || Number.MAX_SAFE_INTEGER,
  );
}
