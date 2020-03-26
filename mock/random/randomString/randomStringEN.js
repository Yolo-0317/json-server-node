/* eslint-disable import/no-unresolved */
import _ from 'lodash';

import english from '../characters/english';
import enSymbol from '../characters/enSymbol';

const en = `${english}${enSymbol}`;
const all = _.size(en) - 1;

// 返回「纯中文」字符串
export default function randomStringEN(size) {
  const strs = [];
  for (let i = 0; i < size; i += 1) {
    const index = _.random(0, all);
    strs.push(en[index]);
  }
  return _.join(strs, '');
}
