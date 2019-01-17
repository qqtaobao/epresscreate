//const { MongoClient } = require("mongodb");
//
//const url = "mongodb://127.0.0.1:27017";
//
//MongoClient.connect(url, (err, client) => {
//	
//	if(err) throw err;
//	
//	const db = client.db("sh1811");  //连接数据库
//	
//	console.log("数据库连接成功");
//	
//	const collection =db.collection("go");  //连接集合
//	
//	   console.log("集合成功");
//	
//	
//})

//const { MongoClient } = require("mongodb");
//
//const url = "mongodb://127.0.0.1:27017";
//
//MongoClient.connect(url, (err, client) => {
//	
//	if(err) throw err;
//	
//	const db = client.db("sh1811");
//	
//	    console.log("数据库连接成功");
//	    
//	const  collection = db.collection("go"); // 连接集合
//	       console.log("集合连接成功");
//	    
//	    collection.insert({"username":"赵四","age":23}, (err, data) => {
//	    	
//	    	if(err) throw err;
//	    	
//	    	console.log("添加成功");
//	    	console.log(data);
//	    	client.close();
//	    	
//	    })
//
//	
//})

const  { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client) => {
	
	if(err) throw err;
	
	const db = client.db("sh1811");
	  
	     console.log("数据库连接成功");
	
	const  collection = db.collection("go");
	  
	         console.log("集合连接成功");
	        collection.insert({"username":"都是对回电话","age":13}, (err, data) =>{
	        	
	        	if(err) throw err;
	        	
	        	console.log("连接成功");
	        	
	        	client.close();
	        	
	        });
	        
})

