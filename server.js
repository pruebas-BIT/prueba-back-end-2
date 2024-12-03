import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./dataBase/mongoConnet.js";
const app = express();

dotenv.config();
// const databaseConnect = require("./db/config");

connectDatabase();

app.use("/", api);

const port = process.env.PORT || 5020;


app.listen(port, () =>{
    console.log(`the server is running on the ${port}`)
})

app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cors());


// module.exports = app;
