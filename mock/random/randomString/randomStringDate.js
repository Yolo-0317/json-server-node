/* eslint-disable import/no-unresolved */
import _ from 'lodash';
import moment from 'moment';

import randomDate from '../randomDate';

// 返回随机时间
export default function randomStringDate(str) {
  const size = _.size(str);
  let format = 'YYYY-MM-DD';
  if (size > 17) {
    format = 'YYYY-MM-DD hh:mm:ss';
  } else if (size > 10) {
    format = 'YYYY-MM-DD hh:mm';
  }
  return moment(randomDate()).format(format);
}
