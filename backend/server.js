const express = require("express");
const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello world!!");
});

app.get("/api/get", (req, res) => {
  res.send("ok!!");
});

app.post("/post", (req, res) => {
  let data = req.body;
  console.log(data);
  res.status(200).json({ result: "success!", data: data });
});

app.listen(3000, () => console.log("server is listen on port: 3000"));
