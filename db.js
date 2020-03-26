import _ from 'lodash';
const { readAllFilesInFolder } = require('./readFiles');

const excludes = ['demo', 'huaan', 'smline', 'west', 'pms', 'yc']; // 要忽略的文件夹
const allDBFiles = readAllFilesInFolder('./dbs/', excludes);

module.exports = () => {
  const result = {};
  allDBFiles.forEach((dbPath) => {
    Object.assign(result,
      // eslint-disable-next-line global-require
      require(dbPath));
  });
  return result;
};
