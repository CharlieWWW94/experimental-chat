import express from 'express';
import bodyParser from 'body-parser';
const app = express();
app.listen(3000);

//Acts as surrogate database.
const messageList = ["Hi", "hello", "Bonjour!"];


//body-parser allows the accessing of the post body with req.body in function below ***
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())


//This prevents cors errors in the browser.
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});


app.get("/", (req, res) => {
    res.send(messageList);
});

app.post("/", (req, res) => {
    // ••• Here it is!!!
    messageList.push(req.body.message);
    res.send("POST COMPLETE");
});

