/* eslint-disable import/no-unresolved */
import _ from 'lodash';

import english from '../characters/english';

// 邮箱后缀
const suffix = [
  '@126.com',
  '@139.com',
  '@datayes.com',
  '@gmail.com',
  '@yahoo.com',
  '@msn.com',
  '@hotmail.com',
  '@aol.com',
  '@ask.com',
  '@live.com',
  '@qq.com',
  '@0355.net',
  '@163.com',
  '@163.net',
  '@263.net',
  '@3721.net',
];
// 邮箱后缀「个数」
const suffixSize = _.size(suffix) - 1;

// 允许的邮箱「字符」
const en = `0123456789-_${_.trim(english)}`;
// 字符大小
const all = _.size(en) - 1;

/**
 * 随机生成「邮箱」
 * @param {int} size 长度
 */
export default function randomEmail(size) {
  // 获取「邮箱后缀」下标
  const index = _.random(0, suffixSize);
  // 定义邮箱数组
  const strs = [];
  // 根据大小「遍历」数组
  for (let i = 0; i < size; i += 1) {
    // 获取字符「下标」
    const idx = _.random(0, all);
    // 添加一个字符
    strs.push(en[idx]);
  }
  // 返回随机邮箱
  return `${_.join(strs, '')}${suffix[index]}`;
}
