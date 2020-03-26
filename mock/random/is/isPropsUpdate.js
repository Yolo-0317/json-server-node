/* eslint-disable import/no-unresolved */
/* eslint-disable no-restricted-syntax */
import _ from 'lodash';

// 判断属性完成更新
export default function isPropsUpdate(nextProps, props, ...checkProps) {
  // 遍历需要「检查属性」
  for (const cp of checkProps) {
    // 如果属性相同
    if (_.get(nextProps, cp) === _.get(props, cp)) {
      // 没有更新
      return false;
    }
  }
  // 更新成功
  return true;
}
