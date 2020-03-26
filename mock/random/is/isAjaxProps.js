/* eslint-disable import/no-unresolved */
import _ from 'lodash';

// ajax属性key
export const ajaxPropsKeys = [
  'name',
  'params',
  'loading',
  'error',
  'data',
  'start',
  'responseId',
];

// 判断属性是否为「ajax属性」
export default function isAjaxProps(propVal) {
  // 是一个普通对象
  if (_.isPlainObject(propVal)) {
    // 必须有相同的key
    return _.isEmpty(_.difference(_.keys(propVal), ajaxPropsKeys));
  }
  // 不是一个ajax属性
  return false;
}
