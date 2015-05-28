var fs = require('fs');
var dice = require('/home/student/workspace/Yatzy/Server/dice.js');
var app = require('http').createServer(serveStaticIndex).listen(8124);

// Laden von Socket.io
//(Gibt für die Demo nur Fehler/Warnungen auf der Konsole aus)
var io = require('socket.io').listen(app).set('log level', 1);
 
// Zugriff auf das Dateisystem (zum Ausliefern der index.html)
var fs = require('fs');
 
// Liefert die Startseite aus
function serveStaticIndex(req, res) {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	var fileStream = fs.createReadStream('/home/student/workspace/Yatzy/Server/index.html');
  
      res.writeHead(200);
      fileStream.pipe(res);
}
 
// Socket.io-Events
io.sockets.on('connection', function (socket) {
 
  socket.on('wuerfeln', function (data) {
	  dice.throwDices();
	
	  socket.emit('diceThrow', dice.getDices());
  });
});

 

