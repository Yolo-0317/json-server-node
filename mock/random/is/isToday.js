import instance from '../moment/instance';

// 传入时间，是否为今天
export default function isToday(mom) {
  if (mom) {
    const mo = instance(mom);
    return mo && mo.isSame(instance(), 'day');
  }
  return false;
}
