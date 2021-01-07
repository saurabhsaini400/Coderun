const express=require("express");

const app= express();
const port=80;

app.get("/",(req,res)=>){
    res.send("This is my first");
})
app.listen(port, ()=>{
    console.log(`successfyll ${port}`);
})