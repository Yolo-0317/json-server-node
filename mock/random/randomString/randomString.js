/* eslint-disable import/no-unresolved */
import _ from 'lodash';

import chinese from '../characters/chinese';
import english from '../characters/english';
import cnSymbol from '../characters/cnSymbol';
import enSymbol from '../characters/enSymbol';

// 构建「完整」字符串
const str = `${chinese}${cnSymbol}${english}${enSymbol}`;
// 获取字符串长度
const all = _.size(str) - 1;

// 返回「随机」字符串
export default function randomString(size) {
  const strs = [];
  for (let i = 0; i < size; i += 1) {
    const index = _.random(0, all);
    strs.push(str[index]);
  }
  return _.join(strs, '');
}
