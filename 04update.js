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
//	const collection = db.collection("go");
//	    
//	    collection.updateMany({},{$inc:{"age":1}}, (err, data) =>{
//	    	
//	    	if(err) throw err;
//	    	
//	    	console.log("更新成功ok");
//	    	
//	    	client.close();
//	    	
//	    })
//	
//})

const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";

MongoClient.connect(url, (err, client) => {
	
	if(err) throw err;
	
	const db = client.db("sh1811");
	const collection = db.collection("go");
	
	 collection.updateMany({},{$inc:{"age":-1}}, (err, data) =>{ 
	      if(err) throw err;
	      
	      console.log("okbuok");
	      
	      client.close();
	 
	 })
	
	
	
})



