const exp = require("constants");
const express = require("express");
const path = require("path");

const app = express();
const frontend = path.join(`${__dirname}/../frontend`)
const port = 9000;

app.use(express.json())
app.use('/public', express.static(`${frontend}/public`))

app.get("/", (req, res,) => {
    console.log("Request received");
    res.sendFile(`${frontend}/index.html`);
});

app.get('/image-list', (req,res) => {
    res.sendFile(`${frontend}/data.json`);
})


app.listen(9000, () => {
    console.log('http://127.0.0.1:9000');
})