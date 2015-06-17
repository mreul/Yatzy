
TestCase ( "Test for tryOnes" , {
	"test should check if all ones are fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [1,2,3,1,3];
		assertEquals(tryOnes(testDices,testHoldDices), [1,0,0,1,0]);},
		
	"test should check if no number is fixed if no one occurs " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [6,2,3,6,3];
		assertEquals(tryOnes(testDices,testHoldDices), [0,0,0,0,0]);
		},
	
	"test should check if fixed numbers remain if they are a one " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [1,2,1,1,3];
		assertEquals(tryOnes(testDices,testHoldDices), [1,0,1,1,0]);
		},
		
	"test should check if fixed numbers don't remain if they are no one " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [4,2,3,3,3];
		assertEquals(tryOnes(testDices,testHoldDices), [0,0,0,0,0]);
		}
	});

TestCase ( "Test for tryTwos" , {
	"test should check if all twos are fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [2,2,3,1,2];
		assertEquals(tryTwos(testDices,testHoldDices), [1,1,0,0,1]);},
		
	"test should check if no number is fixed if no two occurs " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [6,6,3,6,3];
		assertEquals(tryTwos(testDices,testHoldDices), [0,0,0,0,0]);
		},
		
	"test should check if fixed numbers don't remain if they are no two " : function(){ 
		
		testDices = [4,6,3,3,3];
		testHoldDices = [1,0,1,1,0];
		assertEquals(tryTwos(testDices,testHoldDices), [0,0,0,0,0]);
		},	
	
	"test should check if fixed numbers remain if they are a two " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [2,1,2,2,3];
		assertEquals(tryTwos(testDices,testHoldDices), [1,0,1,1,0]);
		}
	});

TestCase ( "Test for tryThrees" , {
	"test should check if all threes are fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [3,3,3,1,3];
		assertEquals(tryThrees(testDices,testHoldDices), [1,1,1,0,1]);},
		
	"test should check if no number is fixed if no one occurs " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [6,2,1,6,1];
		assertEquals(tryThrees(testDices,testHoldDices), [0,0,0,0,0]);
		},
	
	"test should check if fixed numbers remain if they are a three " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [3,2,3,3,5];
		assertEquals(tryThrees(testDices,testHoldDices), [1,0,1,1,0]);
		},
		
	"test should check if fixed numbers don't remain if they are no three " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [4,2,4,5,5];
		assertEquals(tryThrees(testDices,testHoldDices), [0,0,0,0,0]);
		}
	});

TestCase ( "Test for tryFours" , {
	"test should check if all fours are fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [4,2,4,1,4];
		assertEquals(tryFours(testDices,testHoldDices), [1,0,1,0,1]);},
		
	"test should check if no number is fixed if no four occurs " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [6,2,3,6,3];
		assertEquals(tryFours(testDices,testHoldDices), [0,0,0,0,0]);
		},
	
	"test should check if fixed numbers remain if they are a four " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [4,2,4,4,3];
		assertEquals(tryFours(testDices,testHoldDices), [1,0,1,1,0]);
		},
		
	"test should check if fixed numbers don't remain if they are no four " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [1,2,3,3,3];
		assertEquals(tryFours(testDices,testHoldDices), [0,0,0,0,0]);
		}
	});

TestCase ( "Test for tryFives" , {
	"test should check if all fives are fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [1,5,5,1,3];
		assertEquals(tryFives(testDices,testHoldDices), [0,1,1,0,0]);},
		
	"test should check if no number is fixed if no five occurs " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [6,2,3,6,3];
		assertEquals(tryFives(testDices,testHoldDices), [0,0,0,0,0]);
		},
	
	"test should check if fixed numbers remain if they are a five " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [5,2,5,5,3];
		assertEquals(tryFives(testDices,testHoldDices), [1,0,1,1,0]);
		},
		
	"test should check if fixed numbers don't remain if they are no five " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [4,2,3,3,3];
		assertEquals(tryFives(testDices,testHoldDices), [0,0,0,0,0]);
		}
	});

TestCase ( "Test for trySixes" , {
	"test should check if all sixes are fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [1,6,6,6,6];
		assertEquals(trySixes(testDices,testHoldDices), [0,1,1,1,1]);},
		
	"test should check if no number is fixed if no six occurs " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [1,2,3,4,3];
		assertEquals(trySixes(testDices,testHoldDices), [0,0,0,0,0]);
		},
	
	"test should check if fixed numbers remain if they are a six " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [6,2,6,6,3];
		assertEquals(trySixes(testDices,testHoldDices), [1,0,1,1,0]);
		},
		
	"test should check if fixed numbers don't remain if they are no six " : function(){ 
			
		testHoldDices = [1,0,1,1,0];
		testDices = [4,2,3,3,3];
		assertEquals(trySixes(testDices,testHoldDices), [0,0,0,0,0]);
		}
	});

//This case comprises three and four of a kind and Yatzy
TestCase ( "Test for tryMoreOfAKind" , {
	"test should check if the largest numbers occurring twice are fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [1,2,5,1,5];
		testFreqs = createFreqs(testDices);
		assertEquals(tryMoreOfAKind(testDices,testFreqs, testHoldDices), [0,0,1,0,1]);},
		
	"test should check if the largest number is fixed if every number occurs once " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [1,2,3,6,2];
		testFreqs = createFreqs(testDices);
		assertEquals(tryMoreOfAKind(testDices,testFreqs, testHoldDices), [0,0,0,1,0]);
		},
	
	"test should check if numbers occurring three times are preferred " : function(){ 
			
		testHoldDices = [1,0,0,1,0];
		testDices = [4,6,6,4,6];
		testFreqs = createFreqs(testDices);
		assertEquals(tryMoreOfAKind(testDices,testFreqs, testHoldDices), [0,1,1,0,1]);
		},
		
	"test should check if numbers occurring four times are fixed" : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [4,6,6,6,6];
		testFreqs = createFreqs(testDices);
		assertEquals(tryMoreOfAKind(testDices,testFreqs, testHoldDices), [0,1,1,1,1]);
		},
	"test should check if numbers already occuring twice are left and additional numbers are fixed if necessary" : function(){ 
		
		testHoldDices = [0,1,0,0,1];
		testDices = [4,6,6,3,6];
		testFreqs = createFreqs(testDices);
		assertEquals(tryMoreOfAKind(testDices,testFreqs, testHoldDices), [0,1,1,0,1]);
		},
	});

TestCase ( "Test for tryFullHouse" , {
	"test should check if two numbers occurring twice are fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [1,2,5,1,5];
		testFreqs = createFreqs(testDices);
		tryFullHouse(testDices,testFreqs, testHoldDices);
		assertEquals(testHoldDices, [1,0,1,1,1]);},
		
	"test should check if the numbers occurring three times and one additional are fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [3,3,3,6,2];
		testFreqs = createFreqs(testDices);
		tryFullHouse(testDices,testFreqs, testHoldDices);
		assertEquals(testHoldDices, [1,1,1,1,0]);
		},
	
	"test should check if a full house is fixed" : function(){ 
			
		testHoldDices = [1,0,0,1,0];
		testDices = [2,2,3,2,3];
		testFreqs = createFreqs(testDices);
		tryFullHouse(testDices,testFreqs, testHoldDices);
		assertEquals(testHoldDices, [1,1,1,1,1]);
		},
	});

//applies for both small and large straight
TestCase ( "Test for tryStraight" , {
	"test should check if a number sequence of two is fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [1,4,5,1,5];
		testFreqs = createFreqs(testDices);
		tryStraight(testDices,testFreqs, testHoldDices);
		assertEquals(testHoldDices, [0,1,1,0,0]);},
		
	"test should check if a number sequence of three is fixed " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [4,3,3,6,2];
		testFreqs = createFreqs(testDices);
		tryStraight(testDices,testFreqs, testHoldDices);
		assertEquals(testHoldDices, [1,1,0,0,1]);
		},
	
	"test should check if a number sequence of four is fixed " : function(){ 
			
		testHoldDices = [1,0,0,1,0];
		testDices = [4,2,3,1,3];
		testFreqs = createFreqs(testDices);
		tryStraight(testDices,testFreqs, testHoldDices);
		assertEquals(testHoldDices, [1,1,1,1,0]);
		},
		
	"test should check if identical fixed numbers are released " : function(){ 
			
		testHoldDices = [1,1,0,1,0];
		testDices = [4,4,1,4,6];
		testFreqs = createFreqs(testDices);
		tryStraight(testDices,testFreqs, testHoldDices);
		assertEquals(testHoldDices, [0,0,0,0,0]);
		},	
	});

TestCase ( "Test for tryChance" , {
	"test should check if all fives and sixes are fixed" : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [1,3,5,6,5];
		tryChance(testDices, testHoldDices);
		assertEquals(testHoldDices, [0,0,1,1,1]);},
		
	"test should check if all fours are fixed if no fives and sixes occur " : function(){ 
		
		testHoldDices = [0,0,0,0,0];
		testDices = [4,3,3,4,2];
		tryChance(testDices, testHoldDices);
		assertEquals(testHoldDices, [1,0,0,1,0]);
		},
	
	"test should check if nothing is fixed if no numbers greater than three occur " : function(){ 
			
		testHoldDices = [0,0,0,0,0];
		testDices = [1,2,3,1,3];
		tryChance(testDices, testHoldDices);
		assertEquals(testHoldDices, [0,0,0,0,0]);
		},
		
	"test should check if small fixed numbers are released " : function(){ 
			
		testHoldDices = [1,1,0,0,1];
		testDices = [3,3,1,1,3];
		tryChance(testDices, testHoldDices);
		assertEquals(testHoldDices, [0,0,0,0,0]);
		},	
		
	"test should check if large fixed numbers remain" : function(){ 
		
		testHoldDices = [1,1,0,0,1];
		testDices = [6,6,1,1,6];
		tryChance(testDices, testHoldDices);
		assertEquals(testHoldDices, [1,1,0,0,1]);
		},
	});