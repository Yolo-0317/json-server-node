/* eslint-disable import/no-unresolved */
import _ from 'lodash';

// import { config } from '../../initialize';
import isStringZH from '../is/isStringZH';
import isStringEN from '../is/isStringEN';
import isStringName from '../is/isStringName';
import isStringNumber from '../is/isStringNumber';
import isStringDate from '../is/isStringDate';
import randomStringZH from './randomStringZH';
import randomStringEN from './randomStringEN';
import randomString from './randomString';
import randomStringName from './randomStringName';
import randomStringNumber from './randomStringNumber';
import randomStringDate from './randomStringDate';

// 获取「随机」字符串【相关配置】
// const stringLength = _.get(config, 'random.randomString') || {};
const stringLength = {
  short: [1, 10],
  medium: [30, 60],
  long: [200, 500],
  veryLong: [600, 3000],
};
const { medium } = stringLength || {};

// 生成随机字符串
export default function randomStringFunc(value, length) {
  // 获取字符串「长度范围」
  const range = stringLength[length] || medium;
  // 随机一个字符串「长度」
  const size = _.random(range[0], range[1]);
  // 如果是「纯中文」字符串
  if (isStringZH(value)) {
    // 如果是名字类型
    if (isStringName(value)) {
      return randomStringName();
    }
    // 随机「纯中文」字符串
    return randomStringZH(size);
  }
  // 如果是「纯英文」字符串
  if (isStringEN(value)) {
    // 如果是数值字符串
    if (isStringNumber(value)) {
      // 返回随机「数值」
      return randomStringNumber();
    }
    // 如果是一个时间字符串
    if (isStringDate(value)) {
      return randomStringDate(value);
    }
    // 随机「纯英文」字符串
    return randomStringEN(size);
  }
  // 返回「随机」字符串
  return randomString(size);
}
