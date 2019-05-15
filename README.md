# json-server-node
support multiply files config
基于node启动的json-server的mock系统，启动后自动读取指定目录dbs中的json文件，node版本v10LTS

[json-server相关知识](https://github.com/ShadowWalker627/json-server-node/issues/1)

git clone后直接执行
> npm start

通过nodemon启动服务，可监控dbs文件夹中的任一未被忽略的目录下的json文件的变化，支持自动重启服务

服务启动后会自动列出现有的可用API，可通过设置db.js中的excludes中的文件夹列表，忽略掉某些文件夹中的json文件
```
// db.js
const excludes = ['demo']; // 要忽略的文件夹
const allDBFiles = readAllFilesInFolder('./dbs/', excludes);
```

默认端口4000

启动示例：
```
------JSON Server is running: 4000------- 

http://localhost:4000/posts 

http://localhost:4000/comments 

http://localhost:4000/profile 

http://localhost:4000/getUserProfit 

http://localhost:4000/shapeDetail 

```
