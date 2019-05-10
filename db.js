const { readAllFilesInFolderSync } = require('./readFiles');

const allDBFiles = [];
const excludes = ['demo']; // 要忽略的文件夹
readAllFilesInFolderSync('./dbs/', allDBFiles, excludes);
// console.log(allDBFiles);

module.exports = () => {
  const result = {};
  allDBFiles.forEach((dbPath) => {
    Object.assign(result,
      // eslint-disable-next-line global-require
      require(dbPath));
  });
  return result;
};
