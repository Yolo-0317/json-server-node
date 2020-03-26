import _ from 'lodash';

export default function isAjaxLoading(propVal) {
  return _.get(propVal, 'loading');
}
