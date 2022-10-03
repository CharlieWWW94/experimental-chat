import express from 'express';
import cors from 'cors';
const app = express();
app.listen(3000);

const corsOptions = {
    origin: "*",
};

app.use(cors(corsOptions));

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

const messageList = ["Hi", "hello", "Bonjour!"];

app.get("/", (req, res) => {
    res.send(messageList);
});