/* eslint-disable import/no-unresolved */
import _ from 'lodash';

export default function isEveryValues(object) {
  if (_.isPlainObject(object)) {
    return _.every(_.values(object));
  }
  return false;
}
