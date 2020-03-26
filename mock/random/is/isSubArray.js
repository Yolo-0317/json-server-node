/* eslint-disable import/no-unresolved */
import _ from 'lodash';

// 是否为一个子数组
export default function isSubArray(array, subArray) {
  // 如果两个参数都是「数组」
  if (_.isArray(array) && _.isArray(subArray)) {
    // 定义索引
    let index = -1;
    // 遍历「子数组」
    for (let i = 0; i < subArray.length; i += 1) {
      // 获取「数组元素」
      const item = subArray[i];
      // 查找「数组中元素--索引」
      const fi = _.findIndex(array, ai => ai === item);
      // 如果是「第一个元素」
      if (i === 0) {
        // 如果「没有找到」
        if (fi < 0) {
          // 不是「子数组」
          return false;
        }
      // 查找其他元素「没有找到」或是「位置不连续」
      } else if (fi < 0 || fi !== index + 1) {
        // 不是「子数组」
        return false;
      }
      // 修改「索引未知」
      index = fi;
    }
    // 是一个子数组
    return true;
  }
  // 不是子数组
  return false;
}
