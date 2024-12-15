const express = require("express");
const app = express();
app.use(express.json());


app.get("/", (req, res)=>{
    res.send("Hello world!")
});

app.post("/post", (req, res)=>{
    let data = req.body;
    console.log(data)
    res.status(200).json({result:"success!", data: data})
});

app.listen(3000, ()=> console.log("server is listen on port: 3000")); //1-2-3-4-5-c