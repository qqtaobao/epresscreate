const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const sql = {
	
	insert: (database,collectionName,insertAdd) =>{
		
//		return new Promise((res,rej) =>{ 
//		     
//		 MongoClient.connect(url, (err, client) =>{
//		 	
//		 	if(err) throw err;
//		 	
//		 	const db = client.db("sh1811");
//		 	
//		 	const collection =db.collection("go");
//		 	
//		 	   collection.insert({"username":"颠三倒四","age":33}, (err, data) => {
//		 	   	  
//		 	   	   if(err){ 
//		 	   	      
//		 	   	      rej(err);
//		 	   	   }else{
//		 	   	   	
//		 	   	   	res();
//		 	   	   }
//		 	   	   
//		 	   	   client.close();
//		 	   	
//		 	   })
//		 	
//		 	
//		 })
//		     
//		     
//		   
//		
//		})


 return new Promise((res, rej) => {
 	
 	MongoClient.connect(url, (err, client) => {
 		
 		if(err) throw err;
 		
 		const db = client.db(database);
 		const collection = db.collection(collectionName);
 		
 		collection.insert(insertAdd,(err, data) => {
 			
 			if(err){
 				
 				rej(err);
 			}else{
 				
 				res();
 			}
 			
 		client.close();	
 			
 		})
 		
 		
 		
 	})
 	
 	
 	
 } )

	
 },
 
 remove: (database,collectionName,removeData) =>{
 	
 	return new Promise((res,rej) =>{ 
 	   
 	    MongoClient.connect(url, (err, client) =>{
 	    	
 	    	if(err) throw err;
 	    	
 	    	const db = client.db(database);
 	    	
 	    	const collection = db.collection(collectionName);
 	    	    
 	    	    collection.remove(removeData,3,(err, data) => {
 	    	    	
 	    	    	if(err){
 	    	    		
 	    	    		rej(err);
 	    	    	}else{
 	    	    		
 	    	    		res();
 	    	    	}
 	    	    	
 	    	    	client.close();
 	    	    })
 	    	
 	    	
 	    })
 	   
 	
 	
 	} )

 },
 
 update:(database,collectionName,updataType,ifdata,changedata) =>{
 	
 	return new Promise((res,rej) => {
 		
 	MongoClient.connect(url,(err, client) => {
 		
 		if(err) throw err;
 		
 		const db =client.db(database);
 		
 		const collection = db.collection(collectionName);
 		      
 		      collection[updataType](ifdata,changedata, (err,data) =>{
 		     	
 		     	if(err){
 		     		
 		     		rej(err);
 		     	}else{
 		     		
 		     		res();
 		     	}
 		     	
 		     	client.close();
 		     	
 		     })
 		
 		
 		
 	})
 		
 		
 	})
 	
 	
 },
 
 find:(database,collectionName,findType,ifdata,showdata) =>{
 	
 	return new Promise((res,rej) =>{
 		
 		MongoClient.connect(url, (err, client) =>{ 
 		   
 		   if(err) throw err;
 		   
 		   const db = client.db(database);
 		   const collection = db.collection(collectionName);
 		        
 		        collection[findType](ifdata,showdata).toArray((err, data) =>{
 		        	
 		        	if(err){
 		        		
 		        		rej(err);
 		        	}else{
 		        		
 		        		res(data);
 		        	}
 		        	
 		        	client.close();
 		        })
 		   
 		
 		})
 		
 		
 	})
 	
 	
 }

}

module.exports = sql;