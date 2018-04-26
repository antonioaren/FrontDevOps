const express = require('express');
const fileUpload = require('express-fileupload');

const _ = require('lodash')
const app = express();

app.use(fileUpload())

app.route('/').get((req,res,next)=>{
    console.log("entre en el get");
    res.json("Se ha hecho una petición get")
});

app.post('/upload', function (req, res){
    if(!req.files) return res.status(400).send('No files were uploaded.')
    let files = [];
    req.files.txtFile.forEach(file =>{
        var result = ""
        let arr = _.values(file.data)
       arr.forEach(str => {
           result += hex2bin(str)
       })
        files.push(result);
    })
    console.log(files.length);
    res.status(200).send("OK")
   });

   function hex2bin(hex){    
           return ("00000000" + (parseInt(hex, 16)).toString(2)).substr(-8);

    }

app.listen(8080, (err) => {
 console.log('Servidor listo en el puerto 8080');
});