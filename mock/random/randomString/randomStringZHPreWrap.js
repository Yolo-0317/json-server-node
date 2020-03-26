/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/no-unresolved */
import _ from 'lodash';
import React from 'react';
import styled from 'styled-components';

import chinese from '../characters/chinese';
import cnSymbol from '../characters/cnSymbol';

// 空格和制表符「保留」换行符「保留」文字转行「转行」
const PreWrapStyled = styled.pre`
    background: transparent;
    border: none;
    white-space: pre-wrap;
    font-family: inherit;
`;

const zh = ` \t\n${chinese} \t\n${cnSymbol} \t\n`;
const all = _.size(zh) - 1;

// 返回「纯中文」字符串
export default function randomStringZHPreWrap(size) {
  const strs = [];
  // 遍历size次数
  for (let i = 0; i < size; i += 1) {
    // 获取随机下标
    const index = _.random(0, all);
    // 添加单个字符
    strs.push(zh[index]);
  }
  // 返回字符串
  return <PreWrapStyled>{_.join(strs, '')}</PreWrapStyled>;
}
