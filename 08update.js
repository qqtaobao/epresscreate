const sql = require("./sql.js");

  sql.update("sh1811","go","updateMany",{"username":"历史"},{$inc:{"age":100}}).then(()=>{
  	
  	console.log("更新ok");
  	
  }).catch((err)=>{ 
  
   console.log("更新错误");
  })

