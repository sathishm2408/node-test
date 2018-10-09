 const express=require('express');

 const app=express();

app.get('/',(req,res)=>{
	res.send({title:"welcome to homepage"});
});

app.get('/user',(req,res)=>{
	res.send(
	[{
		name:"sathish",
		age:"22"
	}]);
});

app.listen(3000);

module.exports.app=app;