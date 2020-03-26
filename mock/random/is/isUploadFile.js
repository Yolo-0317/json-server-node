/* eslint-disable import/no-unresolved */
import _ from 'lodash';

// ajax属性key
export const uploadFileKeys = [
  'uid', // '1',
  'name', // 'xxx.png',
  'status', // 'done',
  'response', // 'Server Error 500', // custom error message to show
  'url', // 'http://www.baidu.com/xxx.png',
];

// 判断属性是否为「上传文件」
export default function isUploadFile(fileVal) {
  // 是一个普通对象
  if (_.isPlainObject(fileVal)) {
    // 必须有相同的key
    return _.isEmpty(_.difference(uploadFileKeys, _.keys(fileVal)));
  }
  // 不是一个上传文件
  return false;
}
