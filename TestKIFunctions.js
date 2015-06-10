
TestCase ( "Test for tryOnes" , {
	"test should check if all ones are fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [1,2,3,1,3];
		tryOnes(testDices,testHoldDices);
		assertEquals(testHoldDices, [1,0,0,1,0]);},
		
	"test should check if no number is fixed if no one occurs " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [6,2,3,6,3];
		tryOnes(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,0,0,0,0]);
		},
	
	"test should check if fixed numbers remain if they are a one " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [1,2,1,1,3];
		tryOnes(testDices,testHoldDices);
		assertEquals(testHoldDices, [1,0,1,1,0]);
		},
	"test should check if fixed numbers don't remain if they are no one " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [4,2,3,3,3];
		tryOnes(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,0,0,0,0]);
		}
	});

TestCase ( "Test for tryTwos" , {
	"test should check if all twos are fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [2,2,3,1,2];
		tryTwos(testDices,testHoldDices);
		assertEquals(testHoldDices, [1,1,0,0,1]);},
		
	"test should check if no number is fixed if no two occurs " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [6,6,3,6,3];
		tryTwos(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,0,0,0,0]);
		},
	
	"test should check if fixed numbers remain if they are a two " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [2,1,2,2,3];
		tryTwos(testDices,testHoldDices);
		assertEquals(testHoldDices, [1,0,1,1,0]);
		},
		
	"test should check if fixed numbers don't remain if they are no two " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [4,6,3,3,3];
		tryTwos(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,0,0,0,0]);
		}
	});

TestCase ( "Test for tryThrees" , {
	"test should check if all threes are fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [3,3,3,1,3];
		tryThrees(testDices,testHoldDices);
		assertEquals(testHoldDices, [1,1,1,0,1]);},
		
	"test should check if no number is fixed if no one occurs " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [6,2,1,6,1];
		tryThrees(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,0,0,0,0]);
		},
	
	"test should check if fixed numbers remain if they are a three " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [3,2,3,3,5];
		tryThrees(testDices,testHoldDices);
		assertEquals(testHoldDices, [1,0,1,1,0]);
		},
		
	"test should check if fixed numbers don't remain if they are no three " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [4,2,4,5,5];
		tryThrees(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,0,0,0,0]);
		}
	});

TestCase ( "Test for tryFours" , {
	"test should check if all fours are fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [4,2,4,1,4];
		tryFours(testDices,testHoldDices);
		assertEquals(testHoldDices, [1,0,1,0,1]);},
		
	"test should check if no number is fixed if no four occurs " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [6,2,3,6,3];
		tryFours(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,0,0,0,0]);
		},
	
	"test should check if fixed numbers remain if they are a four " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [4,2,4,4,3];
		tryFours(testDices,testHoldDices);
		assertEquals(testHoldDices, [1,0,1,1,0]);
		},
		
	"test should check if fixed numbers don't remain if they are no four " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [1,2,3,3,3];
		tryFours(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,0,0,0,0]);
		}
	});

TestCase ( "Test for tryFives" , {
	"test should check if all fives are fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [1,5,5,1,3];
		tryFives(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,1,1,0,0]);},
		
	"test should check if no number is fixed if no five occurs " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [6,2,3,6,3];
		tryFives(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,0,0,0,0]);
		},
	
	"test should check if fixed numbers remain if they are a five " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [5,2,5,5,3];
		tryFives(testDices,testHoldDices);
		assertEquals(testHoldDices, [1,0,1,1,0]);
		},
		
	"test should check if fixed numbers don't remain if they are no five " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [4,2,3,3,3];
		tryFives(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,0,0,0,0]);
		}
	});

TestCase ( "Test for trySixes" , {
	"test should check if all sixes are fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [1,6,6,6,6];
		trySixes(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,1,1,1,1]);},
		
	"test should check if no number is fixed if no six occurs " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [1,2,3,4,3];
		trySixes(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,0,0,0,0]);
		},
	
	"test should check if fixed numbers remain if they are a six " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [6,2,6,6,3];
		trySixes(testDices,testHoldDices);
		assertEquals(testHoldDices, [1,0,1,1,0]);
		},
		
	"test should check if fixed numbers don't remain if they are no six " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [4,2,3,3,3];
		trySixes(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,0,0,0,0]);
		}
	});

//This case comprises three and four of a kind
TestCase ( "Test for tryMoreOfAKind" , {
	"test should check if the largest numbers occurring twice are fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [1,2,5,1,5];
		tryMoreOfAKind(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,0,1,0,1]);},
		
	"test should check if the largest number is fixed if every number occurs once " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [1,2,3,6,2];
		tryMoreOfAKind(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,0,0,1,0]);
		},
	
	"test should check if numbers occurring three times are preferred " : function(){ 
			
		testHoldDices = [1,0,0,1,0];
		testDices = [4,6,6,4,6];
		tryMoreOfAKind(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,1,1,0,1]);
		},
	"test should check if numbers occurring four times are fixed" : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [4,6,6,6,6];
		tryMoreOfAKind(testDices,testHoldDices);
		assertEquals(testHoldDices, [0,1,1,1,1]);
		},
	});

