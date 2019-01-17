const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client) => {
	
	if(err) throw err;
	
	const db =client.db("sh1811");
	const collection = db.collection("go");
	
	  collection.remove({"username":"随手"}, (err, data) => {
	        
	        if(err) throw err;
	        
	        console.log("删除成功");
	  })
	
	
})
