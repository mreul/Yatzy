
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
		io.sockets.clients = [];
		getPlayerID2v2();
		assertEquals(1, socket.playerID);
		},
	"test should return 2 if one client is already there" : function(){ 
		io.sockets.clients = [0];
		getPlayerID2v2();
		assertEquals(2, socket.playerID);
		}
	});

TestCase ( "Test for getPlayerID2v2')" , {
	"test should return 1 if no client is there" : function(){ 
		io.sockets.clients = [];
		getPlayerID2v2();
		assertEquals(1, socket.playerID);
		assertEquals(1, socket.teamID);
		},
	"test should check if IDs are correctly distributed" : function(){ 
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
		var holdDices = [0,0,0,0,0];
		socket.würfe = 0;
		socket.emit('wuerfeln1v1', holdDices);
		wuerfeln1v1();
		assertFalse(lastThrow);
		},
	"test should chekck that last throw is reached" : function(){ 
		var holdDices = [0,0,0,0,0];
		socket.würfe = 2;
		socket.emit('wuerfeln1v1', holdDices);
		wuerfeln1v1();
		assertTrue(lastThrow);
		}
	});
/*
 * 	  
		 	  
 */