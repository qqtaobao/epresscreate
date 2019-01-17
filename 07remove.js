const sql = require("./sql.js");


 sql.remove("sh1811","go", {"age":{$gt:12}}).then(()=>{
 	
 	console.log("成功");
 	
 }).catch((err)=>{
 	
 	console.log("失败");
 	
 })
