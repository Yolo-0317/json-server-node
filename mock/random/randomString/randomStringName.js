/* eslint-disable import/no-unresolved */
import _ from 'lodash';

import chinese from '../characters/chinese';
import name from '../characters/name';

const chineseLength = _.size(chinese) - 1;
const nameLength = _.size(name) - 1;

// 随机生成「用户名」
export default function randomName(size) {
  const str = [];
  // 构建名称长度
  const length = size || _.random(1, 2);
  // 遍历姓名字符
  for (let i = 0; i < length; i += 1) {
    // 获取文字下标
    const index = _.random(0, chineseLength);
    // 存入文字
    str.push(chinese[index]);
  }
  // 构建「随机」姓氏
  const nameIndex = _.random(0, nameLength);
  // 返回用户姓名
  return `${name[nameIndex]}${_.join(str, '')}`;
}
