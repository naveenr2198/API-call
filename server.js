const express = require ("express");
const app = express();

app.get("/", (req, res)=>{
    res.send("Hello World");
});

app.post("/",(req, res)=>{
    res.send("POST-Hello World");
});

app.get("/details", (req, res)=>{
    res.send("details are listed here");
})
app.listen("8080",()=>{
    console.log("Server has started")
}
);