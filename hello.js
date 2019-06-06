const express =require('express')
const hbs=require('hbs');
const port=process.env.PORT||3000;
var app=express();
console.log("Starting....")
app.set('view engine','hbs');
app.get('/',(req,res)=>
{
    res.render('home.hbs',{
         title:'homepage',
    });
});
app.get('/about',(req,res)=>{
    res.render('about.hbs',{
        hello:'About.......',
        title2: 'Heyyyy',
        title3: 'HIIII,'
    });
});
app.listen(port,()=>{
    console.log(`System is on ${port}`);
});