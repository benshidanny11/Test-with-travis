const express=require('express');
var app=express();

app.get('/',(req,res)=>
{
  res.send('Hello world');
});

app.get('/users',(req,res)=>{

	res.status(200).send([
        {name:'Danny',age:23},
        {name:'Eric',age:22},
        {name:'Emmy',age:20}
		])
})

app.listen(3616,()=>{
console.log('Server is up on port 3616');
});

module.exports.app=app;