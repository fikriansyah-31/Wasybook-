//instantiate express module
const express = require("express");

//Get routes to the variabel here
// const router = require('./src/routes')

//use express in app variable
const app = express();

//define the server port
const port = 5000;

app.use(express.json())



//Create endpoint grouping and router here
// app.use('/api/v1/', router)

//when this nodejs app executed, it will listen to defined port
app.listen(port, () => console.log(`Final Task Pasti Bisa ${port}!`));