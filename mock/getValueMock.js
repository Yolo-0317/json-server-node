import _ from 'lodash';
import randomBoolean from '../random/randomBoolean';
import randomDate from '../random/randomDate';
import randomSafeInteger from '../random/randomSafeInteger';
import randomNumber from '../random/randomNumber';
import randomString from '../random/randomString';

// 根据「值」返回mock数据
export default function getValueMock(value) {
  // 如果是数组
  if (_.isArray(value)) {
    return _.map(value, val => getValueMock(val));
  }
  // 如果是对象
  if (_.isPlainObject(value)) {
    return _.mapValues(value, val => getValueMock(val));
  }
  // 如果是布尔值
  if (_.isBoolean(value)) {
    return randomBoolean();
  }
  // 如果是时间类型
  if (_.isDate(value)) {
    // 返回任意「有效时间」
    return randomDate();
  }
  // 如果是一个正整数
  if (_.isSafeInteger(value)) {
    return randomSafeInteger(value);
  }
  // 如果是一个数值类型
  if (_.isNumber(value)) {
    return randomNumber(value);
  }
  // 如果是一个字符串
  if (_.isString(value)) {
    return randomString(value);
  }
  // 返回当前值
  return value;
}
