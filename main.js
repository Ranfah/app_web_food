const http = require('http')
const login = require('./pages/components/login')
const register = require('./pages/components/register')
const fs = require('fs')
const url = require('url')
const {getData, insertData,getDataUsername,db} = require('./services/db.js')
const {registerUser,verifyMailPassword} = require('./services/allfunctin/method')
const home = require('./pages/components/views/home')
const allMenu = require('./services/fetchAPISpoonacular')



const PORT = 8000


const serveur = http.createServer((req,res)=>{
    if(req.url=== '/'){
        res.setHeader('Content-Type','text/html')
        res.statusCode = 200
        // let html= fs.readFileSync('./index.html','utf-8')
        // html = html.replace('{{content}}',content)
        fs.readFile(__dirname+'/index.html',function(err,content){
                if(err){
                    res.writeHead(404)
                    res.end()
                }else{
                    let path = "index.html"
                    res.setHeader('X-Content-Type-Options','nosniff')
                    switch(path){
                        case "main.css":
                            res.writeHead(200,{'Content-Type':"text/css"});
                            break
                        case "index.js":
                            res.writeHead(200,{'Content-Type':"application/javascript"})
                            break
                        case "index.html":
                            res.writeHead(200,{'Content-Type':"text/html"})
                    }
                    content = content.toString('utf-8').replace('{{content}}',home);
                    res.end(content)
                }
            })
    }
    if(req.url ==='/login'){
        const content = login
        res.setHeader('Content-Type','text/html')
        res.statusCode = 200
        fs.readFile(__dirname+'/index.html',function(err,content){
            if(err){
                res.writeHead(404)
                res.end()
            }else{
                let path = "index.html"
                res.setHeader('X-Content-Type-Options','nosniff')
                switch(path){
                    case "main.css":
                        res.writeHead(200,{'Content-Type':"text/css"});
                        break
                    case "index.js":
                        res.writeHead(200,{'Content-Type':"application/javascript"})
                        break
                    case "index.html":
                        res.writeHead(200,{'Content-Type':"text/html"})
                }
                content = content.toString('utf-8').replace('{{content}}',login);
                res.end(content)
            }
        })
        if(req.method === 'POST'){
            verifyMailPassword(req,res);
        }
    }
    if(req.url ==='/register'){
        const content = register
        res.setHeader('Content-Type','text/html')
        res.statusCode = 200
        fs.readFile(__dirname+'/index.html',function(err,content){
            if(err){
                res.writeHead(404)
                res.end()
            }else{
                let path = "index.html"
                res.setHeader('X-Content-Type-Options','nosniff')
                switch(path){
                    case "main.css":
                        res.writeHead(200,{'Content-Type':"text/css"});
                        break
                    case "index.js":
                        res.writeHead(200,{'Content-Type':"application/javascript"})
                        break
                    case "index.html":
                        res.writeHead(200,{'Content-Type':"text/html"})
                }
                content = content.toString('utf-8').replace('{{content}}',register);
                res.end(content)
            }
        })
        if(req.method === 'POST'){
            registerUser(req,res)
        }
    }
    if(req.url === '/allmenu'){
        allMenu()
    }
})

serveur.listen(PORT,()=>{
    console.log(`Serveur run on http://127.0.0.1:${PORT}`);
})