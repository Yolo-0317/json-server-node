import _ from 'lodash';

// 是否为空对象
export default function isEmpty(obj) {
  return !_.isUndefined(obj) && _.isEmpty(obj);
}
