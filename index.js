let http=require("http");
const port = 4000;
const hostname = 'localhost'

let fs = require('fs');
let home = fs.readFileSync('./home.html','utf-8')
let about = fs.readFileSync('./about.html','utf-8')
let contact = fs.readFileSync('./contact.html','utf-8')
let error = fs.readFileSync('./error.html','utf-8')

let server = http.createServer((req,res)=>{ 
    if(req.url==='/'){
        return res.end(home);
    }
    else if(req.url==='/about'){
        return res.end(about);
    }
    else if(req.url==='/contact'){
        return res.end(contact);
    }
    else{
        return res.end(error)
    }
})
server.listen(port, hostname, ()=>{
    console.log(`Server is : http://${hostname}:${port}`);
})

