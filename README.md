# json-server-node
support multiply files config
基于node启动的json-server的mock系统，启动后自动读取制定目录dbs中的json文件，node版本v10LTS

git clone后直接执行
> npm start
通过nodemon启动服务，监控dbs文件中的json文件变化，自动重启服务

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
