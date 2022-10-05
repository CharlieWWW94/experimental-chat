import express from 'express';
import cors from 'cors';
const app = express();
app.listen(3000);

const corsOptions = {
    origin: "*",
};

app.use(cors(corsOptions));

app.use("/", (req,res, next) => {
    console.log(messageList);
    messageList.push("Buenos Dias")
    next();
});


app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const messageList = ["Hi", "hello", "Bonjour!"];

app.get("/", (req, res) => {
    console.log("hello")
    res.send(messageList);
});

app.post("/", (req, res) => {
    console.log(req);
    res.send("POST COMPLETE");
});

