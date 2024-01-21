
const mysql = require('mysql')

const db = mysql.createConnection({
    host:`localhost`,
    user:`faniry`,
    password:`123`,
    database:`admin`
})

const getData =  (req,res,dataReq)=>{
    const sql = 'SELECT usermail,password FROM user'
    db.query(sql,(err,data)=>{
        if(err) return console.log(err);
        let result = data.filter(element => element.usermail === dataReq.email && element.password === dataReq.password)
        if(result.length >0){return res.end(data)}else{return res.end('KO')}; 
    })
}
const insertData = (req,res,data)=>{
    const sql = 'INSERT INTO user(username,usermail,password) VALUES (?)'
    let values = [data.username,data.usmail,data.password]
    db.query(sql,[values],(err,data)=>{
        if(err) return res.end(err);
        return res.end('ok');
    })
}
const getDataUsername = (req,res)=>{
    const sql = 'SELECT username FROM user'
    db.query(sql,(err,data)=>{
        if(err) return res.end(JSON.stringify(err))
        return res.end(JSON.stringify(data))
    })
}
module.exports = {getData,insertData,getDataUsername,db}


