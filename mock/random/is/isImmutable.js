/* eslint-disable import/prefer-default-export */
import _ from 'lodash';

// 是否为Immutable对象
export default function isImmutable(obj) {
  return _.has(obj, '__ownerID');
}
