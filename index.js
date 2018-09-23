var http = require('http');
var fs = require('fs');
var PORT = process.env.PORT || '5000';

var server = http.createServer(function(req, res){
    console.log('A user made a request *** ', req.url);
    if(req.url === '/api/questions'){
      res.writeHead(200, {"context-type":"application/json"});
      fs.createReadStream(__dirname+'/ques.json').pipe(res);
      // console.log(fs);
    }else{
      res.writeHead(200, {"context-type":"text/plain"});
      res.write('Welcome get api here -> /api/questions');
      res.end();
    }
});

server.listen(PORT);
console.log('Server is now running...');


// var http = require('http');
// var fs = require('fs');
//
// var server = http.createServer(function(req, res){
//     console.log('A user made a request *** ', req.url);
//     if(req.url === '/api/questions'){
//       res.writeHead(200, {"context-type":"application/json"});
//       var myObj = {
//        name: 'srikanth',
//        job: 'rock star'
//       };
//       res.end(JSON.stringify(myObj));
//     }else{
//       res.writeHead(200, {"context-type":"text/plain"});
//       res.write('Welcome get api here -> /api/questions');
//       res.end();
//     }
// });
//
// server.listen(8888, '127.0.0.1');
// console.log('Server is now running...');
// -------------------------------------------------------
// var http = require('http');
//
// var server = http.createServer(function(req, res){
//     console.log('A user made a request *** ', req.url);
//     res.writeHead(200, {"context-type":"text/plain"});
//     res.write('Hello Srikanth - Node sample');
//     res.end();
// });
//
// server.listen(8888, '127.0.0.1');
// console.log('Server is now running...');
// -------------------------------------------------------
// var http = require('http');
//
// function onRequest(req, res) {
//   console.log('A user made a request ', req.url);
//   res.writeHead(200, {"context-type":"text/plain"});
//   res.write('Hello Srikanth');
//   res.end();
// }
//
// http.createServer(onRequest).listen(8888);
// console.log('Server is now running...');
