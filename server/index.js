const express = require("express")

const app = express()

let counter = 0;

app.get("/", (req,res) => {
    counter += 1;
    res.send("This is the server's response... This is the counter: "+counter)
})
app.listen(5050,() => {
    console.log("Listening...")
})