/* eslint-disable import/no-unresolved */
import _ from 'lodash';

export default function randomNumber(value) {
  return _.random(value > 0 ? 0 : Number.MIN_VALUE, Number.MAX_VALUE, true);
}
