/* eslint-disable import/no-unresolved */
import _ from 'lodash';
import { createSelector } from 'reselect';

import getParamFuncArray from '../reselect/getParamFuncArray';

// 构建参数
const paramFuncArray = getParamFuncArray(1);

// 正则替换，替换规则
const regexMap = {
  YYYY: '([0-9][0-9][0-9][0-9])',
  MM: '([0][1-9]|[1][0-2])',
  DD: '([0][1-9]|[12][0-9]|[3][0-1])',
  hh: '([0][1-9]|[1][0-9]|[2][0-3])',
  mm: '([0][1-9]|[1-5][0-9])',
  ss: '([0][1-9]|[1-5][0-9])',
};

// moment格式字符串「正则表达式--生成器」
const formatRegexReselect = createSelector(
  paramFuncArray,
  (format) => {
    // 如果格式字符串「无效」
    if (!_.isString(format) || !format) {
      // 退出方法
      return undefined;
    }
    // 定义字符串
    let s = format;
    // 遍历正则替换
    _.each(regexMap, (regex, fs) => {
      s = _.replace(s, fs, regex);
    });
    // 返回正则表达式
    return new RegExp(`^${s}$`);
  },
);

/**
 * 判断是否为「moment 格式字符串」
 * @param {*} str 字符串
 * @param {*} format moment格式字符串
 */
export default function isMomentString(str, format) {
  // 参数「不合要求」
  if (!_.isString(str) || !_.isString(format)) {
    // 返回false
    return false;
  }
  // 根据format 字符串，获取正则表达式
  const regex = formatRegexReselect(format);
  // 如果不是「正则表达式」
  if (!_.isRegExp(regex)) {
    // 返回false
    return false;
  }
  // 正则验证「字符串，是否为 moment字符串」
  return regex.test(str);
}
