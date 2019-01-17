//const  mongodb = require("mongodb");
//   console.log(mongodb.MongoClient);
//const { MongoClient } = require ("mongodb");
//const url = "mongodb://127.0.0.1:27017";
//
//MongoClient.connect(url, (err,client) => {
//	
//	if(err) throw err;
//	const db = client.db("sh1811");
//	
//	console.log("连接成功");
//})

const { MongoClient } = require("mongodb"); //引入mongodb模块 找到客户端

const url = "mongodb://127.0.0.1:27017"; //路径

  MongoClient.connect(url, (err,client) => {  //连接客户端
  	
  	if(err) throw err;
  	
  	const db = client.db("sh1811");   //连接数据库
  	
  	 console.log("数据库连接成功");
  	
  })







