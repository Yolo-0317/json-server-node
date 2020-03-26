import _ from 'lodash';
import moment from 'moment';

// 是否为股票交易时间
export default function isTradeHour() {
  const m = moment();
  // 获取星期几
  const week = m.weekday();
  // 如果是工作日
  if (_.includes('1,2,3,4,5', `${week}`)) {
    // 获取小时数
    const time = m.format('HH:mm');
    // 如果是交易时间
    if (time >= '09:30' && time <= '15:00') {
      return true;
    }
  }
  // 不是交易时间
  return false;
}
