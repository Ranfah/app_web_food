const qs = require('querystring')
const {insertData,getData,db} = require('../db')

const registerUser = (req,res)=>{
    let donne = ''
    req.on('data', (data)=>{
        donne+=data
    })
    req.on('end',(data)=>{
        let donneParse = qs.parse(donne)
        insertData(req,res,donneParse)
    })
}

const verifyMailPassword =  (req,res)=>{
    let donne = ''
    req.on('data',(data)=>{
        donne+=data
    })
    req.on('end',async (data)=>{
        let donneParse = qs.parse(donne)
        getData(req,res,donneParse)
        res.end()
    })
    
}


module.exports = {registerUser,verifyMailPassword}