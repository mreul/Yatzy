
TestCase ( "Test for serveStaticIndex" , {
	"test should check that the correct start page is loaded" : function(){ 
		var req = {url:"/"};
		var res = {};
		serveStaticIndex(req,res);
		assertEquals(html,fs.readFileSync("/home/student/workspace/Yatzy/Client/index.html", "utf8"));
		},
		
	"test should check that the page  socket.js is loaded" : function(){ 
		var req = {url:"/socket.js"};
		var res = {};
		serveStaticIndex(req,res);
		assertEquals(script,fs.readFileSync("/home/student/workspace/Yatzy/Client/index.html", "utf8"));
		},
		
	"test should check that the page index1v1.html is loaded" : function(){ 
		var req = {url:"/index1v1.html"};
		var res = {};
		serveStaticIndex(req,res);
		assertEquals(script,fs.readFileSync("/home/student/workspace/Yatzy/Client/index1v1.html", "utf8"));
		},

	"test should check that the page index2v2.html is loaded" : function(){ 
		var req = {url:"/index2v2.html"};
		var res = {};
		serveStaticIndex(req,res);
		assertEquals(script,fs.readFileSync("/home/student/workspace/Yatzy/Client/index2v2.html", "utf8"));
		},	
	});

TestCase ( "Test for socket.on('join1v1')" , {
	"test should check if all parameters for 1v1 are set correctly" : function(){ 
		initSocket();
		io.sockets.clients = [1];
		socket.emit("1v1");
		assertEquals(0, socket.würfe);
		assertEquals(0, socket.zug);
		assertEquals(19, socket.points.length);
		assertEquals(0, socket.points[0]);
		assertEquals(0, socket.points[8]);
		assertEquals(0, socket.points[19]);
		assertEquals("2v2", socket.room);
		assertFalse(socket.plays);
		
		}
	});

TestCase ( "Test for socket.on('join2v2')" , {
	"test should check if all parameters for 2v2 are set correctly" : function(){ 
		initSocket();
		io.sockets.clients = [1,2,3];
		socket.emit("2v2");
		assertEquals(0, socket.würfe);
		assertEquals(0, socket.zug);
		assertEquals(19, socket.points.length);
		assertEquals(0, socket.points[0]);
		assertEquals(0, socket.points[8]);
		assertEquals(0, socket.points[19]);
		assertEquals("1v1", socket.room);
		assertFalse(socket.plays);
		}
	});

TestCase ( "Test for getPlayerID1v1')" , {
	"test should return 1 if no client is there" : function(){ 
		initSocket();
		io.sockets.clients = [];
		getPlayerID2v2();
		assertEquals(1, socket.playerID);
		},
	"test should return 2 if one client is already there" : function(){ 
		initSocket();
		io.sockets.clients = [0];
		getPlayerID2v2();
		assertEquals(2, socket.playerID);
		}
	});

TestCase ( "Test for getPlayerID2v2')" , {
	"test should return 1 if no client is there" : function(){ 
		initSocket();
		io.sockets.clients = [];
		getPlayerID2v2();
		assertEquals(1, socket.playerID);
		assertEquals(1, socket.teamID);
		},
	"test should check if IDs are correctly distributed" : function(){ 
		initSocket();
		io.sockets.clients = [1];
		getPlayerID2v2();
		assertEquals(4, playerIDs.length);
		assertEquals(1,socket.playerID);
		assertEquals(1,socket.teamID);
		
		io.socket.clients = [1,2];
		assertEquals(2,socket.playerID);
		assertEquals(1,socket.teamID);
		
		io.socket.clients = [1,2,3];
		assertEquals(3,socket.playerID);
		assertEquals(2,socket.teamID);
		
		io.socket.clients = [1,2,3,4];
		assertEquals(4,socket.playerID);
		assertEquals(2,socket.teamID);
		}
	});

TestCase ( "Test for wuerfeln1v1')" , {
	"test should check that last throw is not reached" : function(){ 
		initSocket();
		var holdDices = [0,0,0,0,0];
		socket.würfe = 0;
		socket.emit('wuerfeln1v1', holdDices);
		wuerfeln1v1();
		assertFalse(lastThrow);
		},
	"test should chekck that last throw is reached" : function(){ 
		initSocket();
		var holdDices = [0,0,0,0,0];
		socket.würfe = 2;
		socket.emit('wuerfeln1v1', holdDices);
		wuerfeln1v1();
		assertTrue(lastThrow);
		}
	});

TestCase ( "Test for wuerfeln2v2')" , {
	"test should check that last throw is not reached" : function(){ 
		initSocket();
		var holdDices = [0,0,0,0,0];
		socket.würfe = 0;
		socket.emit('wuerfeln2v2', holdDices);
		wuerfeln1v1();
		assertFalse(lastThrow);
		},
	"test should chekck that last throw is reached" : function(){ 
		initSocket();
		var holdDices = [0,0,0,0,0];
		socket.würfe = 2;
		socket.emit('wuerfeln2v2', holdDices);
		wuerfeln1v1();
		assertTrue(lastThrow);
		}
	});

TestCase ( "Test for validateSelection1v1')" , {
	"test should check function validateSelection1v1" : function(){ 
		initSocket();
		socket.playerID = 2;
		socket.zug = 1;
		validateSelection1v1(5,2);
		assertEquals(19, points.length);
		assertEquals(0, socket.würfe);
		assertEquals(2, socket.zug);
		},
	});

TestCase ( "Test for validateSelection2v2')" , {
	"test should check function validateSelection2v2" : function(){ 
		initSocket();
		socket.playerID = 2;
		socket.zug = 1;
		validateSelection2v2(5,2);
		assertEquals(19, points.length);
		assertEquals(0, socket.würfe);
		assertEquals(2, socket.zug);
		
		/*
		 * io.sockets.clients('2v2')[i].playerID = 2;
		 * io.sockets.clients('2v2')[i].teamID = 1;
		 * socket.teamID = 1;
		 * validateSelection2v2(5,2);
			assertEquals(19, points.length);
			assertEquals(0, socket.würfe);
			assertEquals(2, socket.zug);
		 * */
		},
	});

TestCase ( "Test for gameStart1v1)" , {
	"test should check function gameStart1v1" : function(){ 
		initSocket();
		gameStart1v1();	
		/*
		assertTrue(io.sockets.clients('1v1')[0].plays);
		assertTrue(io.sockets.clients('1v1')[1].plays);
		 * */
		},
	});

TestCase ( "Test for gameStart2v2)" , {
	"test should check function gameStart2v2" : function(){ 
		initSocket();
		gameStart2v2();	
		/*
		assertTrue(io.sockets.clients('2v2')[0].plays);
		assertTrue(io.sockets.clients('2v2')[1].plays);
		assertTrue(io.sockets.clients('2v2')[2].plays);
		assertTrue(io.sockets.clients('2v2')[3].plays);
		 * */
		},
	});

TestCase ( "Test for checkGame1v1)" , {
	"test should check if end of game in 1v1-mode is recognized" : function(){ 
		initSocket();
		//end of game
		socket.playerID = 2;
		socket.zug = 13;
		assertTrue(gameStart1v1());	
		
		//not end of game
		socket.playerID = 2;
		socket.zug = 11;
		assertFalse(gameStart1v1());
		},
	});

TestCase ( "Test for checkGame2v2)" , {
	"test should check if end of game in 2v2-mode is recognized" : function(){ 
		
		initSocket();
		socket.playerID = 4;
		socket.zug = 13;
		assertTrue(gameStart2v2());	
		},
	"test should check if end of game in 2v2-mode is not recognized if it is not the end" : function(){ 
		
		initSocket();
		socket.playerID = 4;
		socket.zug = 10;
		assertFalse(gameStart2v2());	
		
		socket.playerID = 3;
		socket.zug = 13;
		assertFalse(gameStart2v2());
		},
	});

TestCase ( "Test for calcTeamPoints)" , {
	"test should check that the sum of ponints of a team is returned" : function(){ 
		
		initSocket();
		socket.teamID = 1;
		/*io.sockets.clients('2v2')[0].teamID = 1;
		 *io.sockets.clients('2v2')[1].teamID = 1; 
		 *io.sockets.clients('2v2')[2].teamID = 2;
		 *io.sockets.clients('2v2')[3].teamID = 2;
		 *io.sockets.clients('2v2')[0].points[18] = 130;
		 *io.sockets.clients('2v2')[1].points[18] = 230;
		 *io.sockets.clients('2v2')[0].points[18] = 105;
		 *io.sockets.clients('2v2')[1].points[18] = 255;
		assertEquals(360, calcTeamPoints());	*/
		},
	});

function initSocket()
{
	var socket = io.connect('http://127.0.0.1:8124');
}
