/* eslint-disable import/no-unresolved */
import _ from 'lodash';

export default function randomBoolean() {
  return !!_.random(0, 1);
}
