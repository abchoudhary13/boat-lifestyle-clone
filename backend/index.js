const express = require("express");
const connection = require("./db");
const cors = require("cors");
const authRouter = require("./routes/authRouter");

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(express.static("public"));

app.use("/auth", authRouter);

app.get("/", function(req,res){
    res.send(__dirname+"/index.html");
})

app.listen(8000, async () => {
    try {
      await connection;
      console.log("connected to db");
    } catch (err) {
      console.log("error while connecting to db");
    }
    console.log("port running on http://localhost:8000");
});