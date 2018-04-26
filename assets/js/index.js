const app = require('express')();
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());

app.route('/upload').post(function(req, res, next) {
  console.log('AAA');
  /*
  var fstream;
  req.pipe(req.busboy);
  req.busboy.on('file', function(fieldname, file, filename) {
    console.log("Uploading: " + filename);

    //Path where image will be uploaded
    fstream = fs.createWriteStream(__dirname + '/img/' + filename);
    file.pipe(fstream);
    fstream.on('close', function() {
      console.log("Upload Finished of " + filename);
      res.redirect('back'); //where to go next
    });
  });
  */
});


app.listen(8080, (err) => {
  console.log('Servidor listo en el puerto');
});
