<<<<<<< HEAD
var multiparty = require('multiparty'), http = require('http'), util = require('util');

http.createServer(function(req, res) {
  if (req.url === '/users' && req.method === 'POST') {
    console.log("1");
    var form = new multiparty.Form();
    form.parse(req, function(err, fields, files) {
      res.writeHead(200, {'content-type': 'text/plain'});
      res.write('received upload:\n\n');
      res.end(util.inspect({fields: fields, files: files}));
    });
    return;
  }
}).listen(8080);
=======
function exampleInputFile(params) {
    
}
>>>>>>> ff468fec80dcff9544c4d2c2b5e1832ae4153549
