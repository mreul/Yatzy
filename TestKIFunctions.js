
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

TestCase ( "Test for simpleKiDraw" , {
		
	"test should check if no straight is tried if both are already fixed " : function(){ 
			
		testCatFixed = [0,0,0,0,0,0,0,0,0,0,0,0,0];
		testInit([3,3,3,3,3]);
		simpleKiDraw(testCatFixed, testDices, testFreqs, testHoldDices);
		assertFalse(straightCalled);
		},
		
	"test should check no full house is tried if it is already fixed" : function(){ 
			
		testCatFixed = [0,0,0,0,0,0,0,0,1,0,0,0,0];
		testInit([3,3,2,2,2]);
		simpleKiDraw(testCatFixed, testDices, testFreqs, testHoldDices);
		assertFalse(fullHouseCalled);
		},
		
	"test should check if more equal numbers are tried" : function(){ 
				
		testCatFixed = [0,0,0,0,0,0,0,0,0,0,0,0,0];
		testInit([2,5,2,1,2]);
		simpleKiDraw(testCatFixed, testDices, testFreqs, testHoldDices);
		assertTrue(twosCalled);
		},
		
	"test should check if sixes are tried if at least two occur" : function(){ 
			
		testCatFixed = [0,0,0,0,0,0,0,0,0,0,0,0,0];
		testInit([6,6,2,1,2]);
		simpleKiDraw(testCatFixed, testDices, testFreqs, testHoldDices);
		assertTrue(sixesCalled);
		},
	
	"test should check if fives are tried if at least two occur" : function(){ 
		
		testCatFixed = [0,0,0,0,0,0,0,0,0,0,0,0,0];
		testInit([6,5,5,1,2]);
		simpleKiDraw(testCatFixed, testDices, testFreqs, testHoldDices);
	    assertTrue(fivesCalled);
	    },
	  
	  "test should check if fours are tried if at least two occur" : function(){ 
		
		testCatFixed = [0,0,0,0,0,0,0,0,0,0,0,0,0];
		testInit([6,4,4,4,2]);
		simpleKiDraw(testCatFixed, testDices, testFreqs, testHoldDices);
		assertTrue(foursCalled);
	    },
	    
	   "test should check if threes are tried if at least two occur" : function(){ 
		
		testCatFixed = [0,0,0,0,0,0,0,0,0,0,0,0,0];
		testInit([6,3,3,4,2]);
		simpleKiDraw(testCatFixed, testDices, testFreqs, testHoldDices);
		assertTrue(threesCalled);
		},
		
	"test should check if twos are tried if at least two occur" : function(){ 
		
		testCatFixed = [0,0,0,0,0,0,0,0,0,0,0,0,0];
		testInit([6,2,3,5,2]);
		simpleKiDraw(testCatFixed, testDices, testFreqs, testHoldDices);
		assertTrue(twosCalled);
		},
	"test should check if ones are tried if at least two occur" : function(){ 
			
		testCatFixed = [0,0,0,0,0,0,0,0,0,0,0,0,0];
		testInit([6,3,1,1,2]);
		simpleKiDraw(testCatFixed, testDices, testFreqs, testHoldDices);
		assertTrue(onesCalled);
		},
	"test should check if sixes are not tried if they are already fixed" : function(){ 
			
		testCatFixed = [0,0,0,0,0,1,0,0,0,0,0,0,0];
		testInit([6,3,3,6,2]);
		simpleKiDraw(testCatFixed, testDices, testFreqs, testHoldDices);
		assertFalse(sixesCalled);
		},
	"test should check if fives are not tried if they are already fixed" : function(){ 
			
		testCatFixed = [0,0,0,0,1,0,0,0,0,0,0,0,0];
		testInit([6,3,3,6,2]);
		simpleKiDraw(testCatFixed, testDices, testFreqs, testHoldDices);
		assertFalse(fivesCalled);
		},
	"test should check if a chance is tried if most other possible categories are already fixed" : function(){ 
			
		testCatFixed = [1,1,1,1,1,1,1,1,0,0,0,1,0];
		testInit([6,3,5,6,2]);
		simpleKiDraw(testCatFixed, testDices, testFreqs, testHoldDices);
		assertTrue(chanceCalled);
		},
	});

TestCase ( "Test for finalKiDraw" , {
	"test should check if the field with the largest achieved points is fixed" : function(){ 
		
		testCatFixed = [0,0,0,0,0,0,0,0,0,0,0,0,0];
		testPoints = [0,0,0,4,0,0,12,0,0,7,7,0,9];
		finalKiDraw(testPoints, testCatFixed);
		assertEquals(testCatFixed, [0,0,0,0,0,0,1,0,0,0,0,0,0]);
		},
		
	"test should check if the largest number at the end of the array is fixed " : function(){ 
		
		testPoints = [0,0,0,4,0,0,12,0,0,7,7,0,13];
		testCatFixed = [0,0,0,0,0,0,0,0,0,0,0,0,0];
		finalKiDraw(testPoints, testCatFixed);
		assertEquals(testCatFixed, [0,0,0,0,0,0,0,0,0,0,0,0,1]);
		},
	
	"test should check if the largest number at the beginning of the array is fixed " : function(){ 
			
		testCatFixed = [0,0,0,0,0,0,0,0,0,0,0,0,0];
		testPoints = [20,0,0,4,0,0,12,0,0,7,7,0,13];
		finalKiDraw(testPoints, testCatFixed);
		assertEquals(testCatFixed, [1,0,0,0,0,0,0,0,0,0,0,0,0]);
		},
		
	"test should check that only one category is fixed if largest number occurs more than once" : function(){ 
		
		testCatFixed = [0,0,0,0,0,0,0,0,0,0,0,0,0];
		testPoints = [4,0,0,4,0,7,20,20,0,7,7,0,13];
		finalKiDraw(testPoints, testCatFixed);
		assertEquals(testCatFixed, [0,0,0,0,0,0,1,0,0,0,0,0,0]);
		},
		
	"test should check that fixed categories remain fixed plus one additional" : function(){ 
		
		testCatFixed = [1,1,1,0,0,0,0,0,0,0,0,1,0];
		testPoints = [4,0,0,4,0,7,25,20,0,7,7,0,13];
		finalKiDraw(testPoints, testCatFixed);
		assertEquals(testCatFixed, [1,1,1,0,0,0,1,0,0,0,0,1,0]);
		},
	});

function testInit(testDices)
{
	onesCalled = false;
	twosCalled = false;
	threesCalled = false;
	foursCalled = false;
	fivesCalled = false;
	sixesCalled = false;
	moreCalled = false;
	straightCalled = false;
	fullHouseCalled = false;
	chanceCalled = false;
	testHoldDices = [0,0,0,0,0];
	testFreqs = createFreqs(testDices);
}
