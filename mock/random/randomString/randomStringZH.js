/* eslint-disable import/no-unresolved */
import _ from 'lodash';
import chinese from '../characters/chinese';
import cnSymbol from '../characters/cnSymbol';

const zh = `${chinese}${cnSymbol}`;
const all = _.size(zh) - 1;

// 返回「纯中文」字符串
export default function randomStringZH(size) {
  const strs = [];
  // 遍历size次数
  for (let i = 0; i < size; i += 1) {
    // 获取随机下标
    const index = _.random(0, all);
    // 添加单个字符
    strs.push(zh[index]);
  }
  // 返回字符串
  return _.join(strs, '');
}
