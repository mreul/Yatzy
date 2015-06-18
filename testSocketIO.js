function loadInit()
{
	var fs = require('fs');
	var req = new Object();
	var res = new Object();
}

TestCase ( "Test for serveStaticIndex" , {
	"test should check that the correct start page is loaded" : function(){ 
		loadInit();
		req.url = "/";
		serveStaticIndex(req,res);
		assertEquals(html,fs.readFileSync("/home/student/workspace/Yatzy/Client/index.html", "utf8"));
		},
		
	"test should check that the correct start page is loaded" : function(){ 
		loadInit();
		req.url = "/socket.js";
		serveStaticIndex(req,res);
		assertEquals(script,fs.readFileSync("/home/student/workspace/Yatzy/Client/index.html", "utf8"));
		},
		
	"test should check that the correct start page is loaded" : function(){ 
		loadInit();
		req.url = "/index1v1.html";
		serveStaticIndex(req,res);
		assertEquals(script,fs.readFileSync("/home/student/workspace/Yatzy/Client/index1v1.html", "utf8"));
		},

	"test should check that the correct start page is loaded" : function(){ 
		loadInit();
		req.url = "/index2v2.html";
		serveStaticIndex(req,res);
		assertEquals(script,fs.readFileSync("/home/student/workspace/Yatzy/Client/index2v2.html", "utf8"));
		},	
	});