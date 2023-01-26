import cors from 'cors';
import express from 'express';
import loginfunc from './routes/login.js';
import {databasecreate} from './database/database_handler.js'

const app = express();
const router = express.Router();

databasecreate()

app.use(cors({credentials:true, origin:true}))
app.use("/", router);
app.use("/accounts", loginfunc)


app.listen(8000, ()=>{
    console.log("Hey");
})