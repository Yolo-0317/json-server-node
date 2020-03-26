import _ from 'lodash';
import name from '../characters/name';

// 如果是一个字符串名称
export default function isStringName(str) {
  const size = _.size(str);
  if (size > 1 && size < 5) {
    return _.includes(name, str[0]);
  }
  return false;
}
