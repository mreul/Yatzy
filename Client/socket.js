var socket = io.connect('http://127.0.0.1:8124');

socket.on('diceThrow', function (data) {
      alert('Wurf: ' + data.dices+ "\n"+ data.points);
});

function wuerfeln()
{
   socket.emit('wuerfeln', "");
}