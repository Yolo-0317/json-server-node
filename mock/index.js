import getColumnsMock from './getColumnsMock';
console.log(getColumnsMock([
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    value: '123',
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    value: '123',
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    value: '123',
  },
], 10));
