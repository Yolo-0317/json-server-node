const fs = require('fs');
const path = require('path');

// 读取目录下的所有文件，不区分类别，TODO:下面的代码是异步的待优化，暂未调通
function readAllFilesInFolderAsync(dir, fileList = []) {
  const absDir = path.resolve(dir);
  // 读取目录下面的文件，返回目录下的文件列表对象，如果传入的是个文件，返回这个文件
  fs.readdir(dir, {}, (error, dirChilds) => {
    if (dirChilds && error === null && Array.isArray(dirChilds)) {
      dirChilds.forEach((dc) => {
        fs.stat(`${dir}/${dc}`, {}, (err, stats) => {
          if (err === null) {
            const isFile = stats.isFile(); // 文件信息对象Stats的一个方法，判断当前文件是不是一个文件
            const curPath = `${absDir}/${dc}`;
            if (isFile) {
              fileList.push(curPath);
            } else {
              // 递归处理
              readAllFilesInFolder(curPath, fileList);
            }
          }
        });
      });
    }
  });
}


// 读取目录下的所有文件，不区分类别
function readAllFilesInFolderSync(dir, fileListSync, excludes = []) {
  const absDir = path.resolve(dir);
  // 读取目录下面的文件，返回目录下的文件列表对象，如果传入的是个文件，返回这个文件
  const dirChilds = fs.readdirSync(absDir, {});
  // console.log(dirChilds);
  // fs.readdir(dir, {}, (error, dirChilds) => {
  if (dirChilds && Array.isArray(dirChilds)) {
    dirChilds.forEach((dc) => {
      const curStat = fs.statSync(`${absDir}/${dc}`, {});
      if (curStat) {
        const isFile = curStat.isFile(); // 文件信息对象Stats的一个方法，判断当前文件是不是一个文件
        const curPath = `${absDir}/${dc}`;
        if (isFile) {
          fileListSync.push(curPath);
        } else {
          // 判断是否忽略当前文件夹
          // eslint-disable-next-line no-lonely-if
          if (!excludes.includes(dc)) {
            // 递归处理
            readAllFilesInFolderSync(curPath, fileListSync);
          }
        }
      }
    });
  }
}

function readAllFilesInFolder(dir, excludes) {
  const allFiles = [];
  readAllFilesInFolderSync(dir, allFiles, excludes);
  return allFiles;
}


module.exports = { readAllFilesInFolder, readAllFilesInFolderAsync, readAllFilesInFolderSync };
