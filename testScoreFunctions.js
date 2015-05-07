TestCase ( "Test for countNumbers" , {
"test should return frequency of the indicated number" : function(){ 
	
	testDices = [1,1,1,1,1];
	assertEquals(5, countNumbers(1, testDices));
	assertEquals(0, countNumbers(2, testDices));
	assertEquals(0, countNumbers(6, testDices));
	
	testDices = [1,2,3,4,5];
	assertEquals(1, countNumbers(1, testDices));
	assertEquals(1, countNumbers(2, testDices));
	assertEquals(1, countNumbers(3, testDices));
	assertEquals(1, countNumbers(4, testDices));
	assertEquals(1, countNumbers(5, testDices));
	assertEquals(0, countNumbers(6, testDices));
	
	testDices = [6,2,1,1,6];
	assertEquals(2, countNumbers(1, testDices));
	assertEquals(2, countNumbers(6, testDices));
	assertEquals(0, countNumbers(3, testDices));
	
	testDices = [5,3,5,3,5];
	assertEquals(3, countNumbers(5, testDices));
	assertEquals(2, countNumbers(3, testDices));
	assertEquals(0, countNumbers(1, testDices));
	
	}
});

TestCase ( "Test for createFreqs" , {
	"test should create an array with the frequency of each number" : function(){ 
		
		testDices = [1,5,3,5,6];
		assertEquals([1,0,1,0,2,1],createFreqs(testDices));
		
		testDices = [2,3,3,3,2];
		assertEquals([0,2,3,0,0,0],createFreqs(testDices));
		
		testDices = [5,6,6,6,6];
		assertEquals([0,0,0,0,1,4],createFreqs(testDices));
		
		testDices = [2,2,2,2,2];
		assertEquals([0,5,0,0,0,0],createFreqs(testDices));
		
		testDices = [3,2,5,4,1];
		assertEquals([1,1,1,1,1,0],createFreqs(testDices));
		}
	});

TestCase ( "Test for checkOnes" , {
	"test should return the score reached with ones" : function(){ 
		
		testFreqs = [3,0,1,1,0,0];
		assertEquals(3,checkOnes(testFreqs));
		
		testFreqs = [0,2,1,1,1,0];
		assertEquals(0,checkOnes(testFreqs));
		
		testFreqs = [5,0,0,0,0,0];
		assertEquals(5,checkOnes(testFreqs));
		}
	});

TestCase ( "Test for checkTwos" , {
	"test should return the score reached with twos" : function(){ 
		
		testFreqs = [0,0,1,3,1,0];
		assertEquals(0,checkTwos(testFreqs));
		
		testFreqs = [2,3,0,0,0,0];
		assertEquals(6,checkTwos(testFreqs));
		
		testFreqs = [0,5,0,0,0,0];
		assertEquals(10,checkTwos(testFreqs));
		}
	});

TestCase ( "Test for checkThrees" , {
	"test should return the score reached with threes" : function(){ 
		
		testFreqs = [0,4,0,0,1,0];
		assertEquals(0,checkThrees(testFreqs));
		
		testFreqs = [2,0,3,0,0,0];
		assertEquals(9,checkThrees(testFreqs));
		
		testFreqs = [0,0,5,0,0,0];
		assertEquals(15,checkThrees(testFreqs));
		}
	});

TestCase ( "Test for checkFours" , {
	"test should return the score reached with fours" : function(){ 
		
		testFreqs = [0,3,1,0,1,0];
		assertEquals(0,checkFours(testFreqs));
		
		testFreqs = [2,0,0,3,0,0];
		assertEquals(12,checkFours(testFreqs));
		
		testFreqs = [0,0,0,5,0,0];
		assertEquals(20,checkFours(testFreqs));
		}
	});

TestCase ( "Test for checkFives" , {
	"test should return the score reached with fives" : function(){ 
		
		testFreqs = [0,3,1,0,0,1];
		assertEquals(0,checkFives(testFreqs));
		
		testFreqs = [2,0,0,0,3,0];
		assertEquals(15,checkFives(testFreqs));
		
		testFreqs = [0,0,0,0,5,0];
		assertEquals(25,checkFives(testFreqs));
		}
	});

TestCase ( "Test for checkSixes" , {
	"test should return the score reached with sixes" : function(){ 
		
		testFreqs = [0,3,1,0,1,0];
		assertEquals(0,checkSixes(testFreqs));
		
		testFreqs = [2,0,0,0,0,3];
		assertEquals(18,checkSixes(testFreqs));
		
		testFreqs = [0,0,0,0,0,5];
		assertEquals(30,checkSixes(testFreqs));
		}
	});

TestCase ( "Test for checkThreeOfAKind" , {
	"test should return the score of three of a kind" : function(){ 
		//if exactly 3 of a kind occur
		testFreqs = [3,0,1,0,1,0];
		assertEquals(3,checkThreeOfAKind(testFreqs));
		
		testFreqs = [0,3,0,2,0,0];
		assertEquals(6,checkThreeOfAKind(testFreqs));
		
		testFreqs = [0,0,0,2,0,3];
		assertEquals(18,checkThreeOfAKind(testFreqs));
		
		//if more than 3 occur
		testFreqs = [4,0,1,0,0,0];
		assertEquals(3,checkThreeOfAKind(testFreqs));
		
		testFreqs = [0,0,1,0,4,0];
		assertEquals(15,checkThreeOfAKind(testFreqs));
		
		testFreqs = [0,0,5,0,0,0];
		assertEquals(9,checkThreeOfAKind(testFreqs));
		
		testFreqs = [0,0,0,0,0,5];
		assertEquals(18,checkThreeOfAKind(testFreqs));
		
		//if no number occurs at least 3 times
		testFreqs = [1,2,2,0,0,0];
		assertEquals(0,checkThreeOfAKind(testFreqs));
		
		testFreqs = [1,1,1,0,1,1];
		assertEquals(0,checkThreeOfAKind(testFreqs));
		
		}
	});

TestCase ( "Test for checkFourOfAKind" , {
	"test should return the score of four of a kind" : function(){ 
		
		//if a number occurs exactly 4 times
		testFreqs = [4,0,0,0,1,0];
		assertEquals(4,checkFourOfAKind(testFreqs));
		
		testFreqs = [1,0,0,4,0,0];
		assertEquals(16,checkFourOfAKind(testFreqs));
		
		testFreqs = [0,0,0,0,1,4];
		assertEquals(24,checkFourOfAKind(testFreqs));
		
		//if a number occurs more than 4 times
		testFreqs = [0,5,0,0,0,0];
		assertEquals(8,checkFourOfAKind(testFreqs));
		
		testFreqs = [0,0,0,0,5,0];
		assertEquals(20,checkFourOfAKind(testFreqs));
		
		//if no number occurs at least 4 times
		testFreqs = [0,0,1,0,1,3];
		assertEquals(0,checkFourOfAKind(testFreqs));
		
		testFreqs = [1,0,1,0,1,2];
		assertEquals(0,checkFourOfAKind(testFreqs));
		
		testFreqs = [1,1,1,0,1,1];
		assertEquals(0,checkFourOfAKind(testFreqs));
		}
	});

TestCase ( "Test for checkFullHouse" , {
	"test should return the score for full house" : function(){ 
		
		//full house
		testFreqs = [3,2,0,0,0,0];
		assertEquals(25,checkFullHouse(testFreqs));
		
		testFreqs = [2,3,0,0,0,0];
		assertEquals(25,checkFullHouse(testFreqs));
		
		testFreqs = [2,0,0,0,0,3];
		assertEquals(25,checkFullHouse(testFreqs));
		
		testFreqs = [3,0,0,0,0,2];
		assertEquals(25,checkFullHouse(testFreqs));
		
		testFreqs = [0,0,0,3,2,0];
		assertEquals(25,checkFullHouse(testFreqs));
		
		//no full house
		testFreqs = [3,1,0,0,1,0];
		assertEquals(0,checkFullHouse(testFreqs));
		
		testFreqs = [2,2,0,1,0,0];
		assertEquals(0,checkFullHouse(testFreqs));
		
		testFreqs = [1,1,1,1,0,1];
		assertEquals(0,checkFullHouse(testFreqs));
		
		testFreqs = [0,4,0,0,0,1];
		assertEquals(0,checkFullHouse(testFreqs));
		
		testFreqs = [0,0,0,5,0,0];
		assertEquals(0,checkFullHouse(testFreqs));
		}
	});

TestCase ( "Test for checkSmallStraight" , {
	"test should return the score for small straight" : function(){ 
		
		//achieved small straight
		testFreqs = [1,1,1,1,0,1];
		assertEquals(30,checkSmallStraight(testFreqs));
		
		testFreqs = [1,0,1,1,1,1];
		assertEquals(30,checkSmallStraight(testFreqs));
		
		testFreqs = [0,1,1,1,1,1];
		assertEquals(30,checkSmallStraight(testFreqs));
		
		testFreqs = [1,1,1,1,1,0];
		assertEquals(30,checkSmallStraight(testFreqs));
		
		//no small straight
		testFreqs = [1,0,1,1,0,1];
		assertEquals(0,checkSmallStraight(testFreqs));
		
		testFreqs = [0,1,1,1,0,1];
		assertEquals(0,checkSmallStraight(testFreqs));
		
		testFreqs = [0,2,1,1,1,0];
		assertEquals(0,checkSmallStraight(testFreqs));
		
		testFreqs = [4,0,1,0,0,0];
		assertEquals(0,checkSmallStraight(testFreqs));
		
		testFreqs = [0,0,0,0,0,5];
		assertEquals(0,checkSmallStraight(testFreqs));
		}
	});

TestCase ( "Test for checkLargeStraight" , {
	"test should return the score of large straight" : function(){ 
		
		//achieved large straight
		testFreqs = [1,1,1,1,1,0];
		assertEquals(40,checkLargeStraight(testFreqs));
		
		testFreqs = [0,1,1,1,1,1];
		assertEquals(40,checkLargeStraight(testFreqs));
		
		//no large straight
		testFreqs = [1,1,1,1,0,1];
		assertEquals(0,checkLargeStraight(testFreqs));
		
		testFreqs = [1,0,1,1,1,1];
		assertEquals(0,checkLargeStraight(testFreqs));
		
		testFreqs = [0,1,1,2,1,0];
		assertEquals(0,checkLargeStraight(testFreqs));
		
		testFreqs = [0,0,0,1,4,0];
		assertEquals(0,checkLargeStraight(testFreqs));
		}
	});

TestCase ( "Test for checkChance" , {
	"test should return the total eye sum" : function(){ 
		
		testFreqs = [1,1,1,1,1,0];
		assertEquals(15,checkChance(testFreqs));
		
		testFreqs = [0,1,1,1,1,1];
		assertEquals(20,checkChance(testFreqs));
		
		testFreqs = [0,0,0,0,0,5];
		assertEquals(30,checkChance(testFreqs));
		
		testFreqs = [0,2,0,0,2,1];
		assertEquals(20,checkChance(testFreqs));
		
		testFreqs = [3,0,0,0,2,0];
		assertEquals(13,checkChance(testFreqs));
		
		testFreqs = [0,0,4,0,1,0];
		assertEquals(17,checkChance(testFreqs));
		
		testFreqs = [1,0,3,1,0,0];
		assertEquals(14,checkChance(testFreqs));
		
		testFreqs = [0,0,0,0,2,3];
		assertEquals(28,checkChance(testFreqs));
		}
	});

TestCase ( "Test for checkYatzy" , {
	"test should return the score for Yatzy" : function(){ 
		
		//Yatzy achieved
		testFreqs = [5,0,0,0,0,0];
		assertEquals(50,checkYatzy(testFreqs));
		
		testFreqs = [0,0,0,5,0,0];
		assertEquals(50,checkYatzy(testFreqs));
		
		testFreqs = [0,0,0,0,0,5];
		assertEquals(50,checkYatzy(testFreqs));
		
		//no Yatzy
		testFreqs = [1,0,0,0,0,4];
		assertEquals(0,checkYatzy(testFreqs));
		
		testFreqs = [0,2,0,0,3,0];
		assertEquals(0,checkYatzy(testFreqs));
		
		testFreqs = [2,0,1,0,0,2];
		assertEquals(0,checkYatzy(testFreqs));
		
		testFreqs = [1,1,0,1,1,1];
		assertEquals(0,checkYatzy(testFreqs));
		}
	});

TestCase ( "Test for checkBonus" , {
	"test should return the achieved bonus" : function(){ 
		
		//Bonus not achieved
		assertEquals(0,checkBonus(-2));
		assertEquals(0,checkBonus(2));
		assertEquals(0,checkBonus(10));
		assertEquals(0,checkBonus(62));
		
		//Bonus achieved
		assertEquals(35,checkBonus(63));
		assertEquals(35,checkBonus(79));
		assertEquals(35,checkBonus(100));
		}
	});

TestCase ( "Test for calcSum" , {
	"test should return the sum of all array elements" : function(){ 
	
		assertEquals(14,(calcSum[1,3,4,6]));
		assertEquals(2,calcSum([2]));
		assertEquals(3,calcSum([2,-2,3,0,0]));
		assertEquals(20,calcSum([2,2,2,2,2,2,2,2,2,2]));
		assertEquals(551,calcSum([430,120,1]));
		}
	});


