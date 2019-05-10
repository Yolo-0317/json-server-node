const { readAllFilesInFolderSync } = require('./readFiles');

const allDBFiles = [];
readAllFilesInFolderSync('./dbs/', allDBFiles);
console.log(allDBFiles);

// module.exports = function () {
//   return Object.assign({},
//     require('./dbs/smline/matchedStocks.json'));
// };

module.exports = () => {
  const result = {};
  allDBFiles.forEach((dbPath) => {
    Object.assign(result,
      // eslint-disable-next-line global-require
      require(dbPath));
  });
  return result;
};
