const { MongoClient} = require("mongodb");

const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client) => {
	
	if(err) throw err;
	
	 console.log("客户端ok");
	
	const  db = client.db("sh1811");  
	
	     console.log("数据库ok");
	
	const  collection = db.collection("go");
	  
	       console.log("集合ok");
	     
	     collection.insert({"username":"电视电话","age":22}, (err, data) => {
	     	
	     	if(err) throw err;
	     	
	     	console.log("添加成功");
	     	
	     });
	     
	
	
})
