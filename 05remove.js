//const { MongoClient } = require("mongodb");
//
//const url = "mongodb://localhost:27017";
//
//MongoClient.connect(url, (err, client) => {
//	
//	if(err) throw err;
//	
//	const db = client.db("sh1811");
//	      
//	      console.log("数据库连接成功");
//	const collection = db.collection("go");
//	       collection.remove({"username":"赵四"}, (err,data) => {
//	       	
//	       	if(err) throw err;
//	       	
//	       	console.log("删除成功");
//	       	
//	       });
//
//})

const  { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client) => {
	if(err) throw err;
	
	const db = client.db("sh1811");
	const collection = db.collection("go");
	
	 collection.remove({"age":1}, (err, data) => {
	 	
	 	if(err) throw err;
	 	
	 	console.log("删除成功");
	 	
	 	client.close();
	 	
	 } )
	
})


