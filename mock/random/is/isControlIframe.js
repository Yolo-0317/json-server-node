/* eslint-disable import/no-unresolved */
import _ from 'lodash';

import getPathName from '../url/getPathName';
import { urlPrefix } from '../parser/router/cache';

// 返回controlIframe 相关路径
export const controlIframe = `${_.trimEnd(urlPrefix, '/')}/control-iframe`;

// 是否是android手机
export default function isControlIframe() {
  const pathName = getPathName();
  return pathName === controlIframe;
}
