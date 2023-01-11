import _ from 'lodash';

const ObjectUtil = {
  ArrayObjectStrip (array) {
    const keys = _.keys(array[0]);
    return _.zipObject(keys, _.map(keys, key => _.map(array, key)));
  }
}

export default ObjectUtil;