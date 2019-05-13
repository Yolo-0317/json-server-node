import _ from 'lodash';
import getValueMock from './getValueMock';

// 根据「类型map」返回相关mock数据
export default function getValueMapMock(valueMap, count) {
  // 定义返回数据
  const array = [];
  // 遍历「需要返回的数据」
  for (let i = 0; i < count; i += 1) {
    // 构建数据唯一标识
    const object = {
      id: `id ${i}`,
    };
    // 遍历表格列
    _.each(valueMap, (value, field) => {
      // 如果没有「生成」该字段值
      if (field && !object[field]) {
        // 向该字段「赋值」
        object[field] = getValueMock(value);
      }
    });
    // 加入一条数据
    array.push(object);
  }
  // 返回mock「数组」
  return array;
}
