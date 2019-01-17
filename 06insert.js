const sql = require("./sql.js");

const  arr = [{"username":"ss",age:11},{"username":"dd",age:33}];

sql.insert("sh1811","go",arr).then(() =>{ 
	
	console.log("okokokok");

}).catch((err) => { 
   console.log("失败了");
});

