import express from 'express';
import {runquery, packetdecrypter} from '../database/database_handler.js'

const router = express.Router();

router.get("/",(req,res)=>{
    runquery("SELECT * FROM accounts",[],(err,result)=>{
        console.log(packetdecrypter(result).email)
    })
})

export default router;