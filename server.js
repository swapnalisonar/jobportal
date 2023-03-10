const express = require("express");

const app =express();
const db= require("./db.js");
 const jobsRoute= require("./routes/jobsRoute");
const userRoute =require("./routes/usersRoute");

app.use(express.json())
 app.use('/api/jobs/', jobsRoute);
 app.use('/api/users/', userRoute);
const port= process.env.PORT ||5000;

app.listen( port,()=>console.log("node js server start"));