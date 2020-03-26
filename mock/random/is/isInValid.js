/* eslint-disable import/no-unresolved */
import _ from 'lodash';

// 无效字符串「列表」
const invalidList = ['', 'null', 'undefined'];

/**
 * 判断值「是否为--无效值」
 * @export
 * @param {*} val
 * @returns
 */
export default function isInValid(val) {
  // 默认无效值「判定」
  return _.isNil(val)
    // 如果是对象「并且为空」
    || (_.isObject(val) && _.isEmpty(val))
    // 如果是「无效字符串」
    || _.includes(invalidList, val);
}
