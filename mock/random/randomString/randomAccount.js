/* eslint-disable import/no-unresolved */
import _ from 'lodash';

import english from '../characters/english';

const eng = _.trim(english);
const engSize = _.size(eng) - 1;
const en = `${eng}.0123456789`;
const all = _.size(en) - 1;

// 返回「纯中文」字符串
export default function randomAccount(size) {
  const strs = [english[_.random(0, engSize)]];
  for (let i = 0; i < size; i += 1) {
    const index = _.random(0, all);
    strs.push(en[index]);
  }
  return _.join(strs, '');
}
