const sql = require("./sql.js");

  sql.find("sh1811","go","find",{"username":"历史"},{"_id":0}).then((data) =>{
  	
  	console.log("查找ok");
  	console.log(data);
  }).catch((err) => {
  	
  	console.log("查找失败");
  })
