const express = require('express');
// const bodyParser = require('body-parser');
const app = express();
const multer = require('multer')
const busboy = require('connect-busboy');
// const busboy = require('busboy');


// app.use(bodyParser.urlencoded({
//     extended: false
// }))

// app.use(bodyParser.json());

app.route('/').get((req,res,next)=>{
    console.log("entre en el get");
    res.json("Se ha hecho una petición get")
});

app.route('/upload').post(function(req, res, next) {
    console.log("entre en el post");
    

    //Path where image will be uploaded
    // fstream = fs.createWriteStream(__dirname + '/img/' + filename);
    // file.pipe(fstream);
    // fstream.on('close', function() {
    //   console.log("Upload Finished of " + filename);
    //   res.redirect('back'); //where to go next
    // });
  
});

app.listen(8080, (err) => {
 console.log('Servidor listo en el puerto 8080');
});