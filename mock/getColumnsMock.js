import _ from 'lodash';
import getValueMock from './getValueMock';

// 根据「表格列」返回相关mock数据
export default function getColumnsMock(columns, count) {
  // 定义返回数据
  const array = [];
  // 遍历「需要返回的数据」
  for (let i = 0; i < count; i += 1) {
    // 构建数据唯一标识
    const object = {
      id: `id ${i}`,
    };
    // 遍历表格列
    _.each(columns, ({
      dataIndex, key, title, value,
    }) => {
      // 获取「字段」名称
      const field = dataIndex || key;
      // 如果没有「生成」该字段值
      if (field && !object[field]) {
        // 向该字段「赋值」
        object[field] = !value ? `${title} ${i + 1}` : getValueMock(value);
      }
    });
    // 加入一条数据
    array.push(object);
  }
  // 返回mock「数组」
  return array;
}
