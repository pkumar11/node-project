const express = require("express");
const bodyParser = require("body-parser");
const dbConnect = require("./dbConnect");

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

//Routes
const usersRoute = require("./routes/users");
//Global Data
const port = process.env.PORT || 8000;
//Routes
app.use(express.static("views"));
app.use("/users",usersRoute);

app.listen(port,()=>{
    console.log(`Server Started at ${port}`);
});
