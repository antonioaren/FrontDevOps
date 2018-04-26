const app = require('express');

const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
 extended: false
}))

app.use(bodyParser.json());


app.route('/').get((req,res,next)=>{
    res.send("Se ha hecho una petición get")
});

app.route('/upload').post(function(req, res, next) {
    res.send(req);
});

app.listen(8080, (err) => {
 console.log('Servidor listo en el puerto');
});