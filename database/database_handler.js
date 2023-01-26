import { json } from 'express';
import mysql from 'mysql';

let connect;

export function databasecreate(){
    connect = mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"Fareham141",
        database:"bean_brew"
    })
    connectthing()
}

function connectthing(){
    connect.connect((err)=>{
        if (err) {
            console.log(err)
        }
        else{
            console.log("You are connected.")
        }
    })
}

export async function runquery(statement,object,callback){
    try{
        return connect.query(statement,object,callback)
    } catch(err){
        console.error("Error.", err)
        connectthing()
        return null
    }
}

export function packetdecrypter(packet, list){
    if (list) {
        return JSON.parse(JSON.stringify(packet))
    }
    return JSON.parse(JSON.stringify(packet))[0]
}