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
		
		assertEquals([1,0,1,0,2,1],createFreqs([1,5,3,5,6]));
		assertEquals([0,2,3,0,0,0],createFreqs([2,3,3,3,2]));
		assertEquals([0,0,0,0,1,4],createFreqs([5,6,6,6,6]));
		assertEquals([0,5,0,0,0,0],createFreqs([2,2,2,2,2]));
		assertEquals([1,1,1,1,1,0],createFreqs([3,2,5,4,1]));
		}
	});

TestCase ( "Test for checkOnes" , {
	"test should return the score reached with ones" : function(){ 
		
		assertEquals(3,checkOnes([3,0,1,1,0,0]));
		assertEquals(0,checkOnes([0,2,1,1,1,0]));
		assertEquals(5,checkOnes([5,0,0,0,0,0]));
		}
	});

TestCase ( "Test for checkTwos" , {
	"test should return the score reached with twos" : function(){ 
		
		assertEquals(0,checkTwos([0,0,1,3,1,0]));
		assertEquals(6,checkTwos([2,3,0,0,0,0]));
		assertEquals(10,checkTwos([0,5,0,0,0,0]));
		}
	});

TestCase ( "Test for checkThrees" , {
	"test should return the score reached with threes" : function(){ 

		assertEquals(0,checkThrees([0,4,0,0,1,0]));
		assertEquals(9,checkThrees([2,0,3,0,0,0]));
		assertEquals(15,checkThrees([0,0,5,0,0,0]));
		}
	});

TestCase ( "Test for checkFours" , {
	"test should return the score reached with fours" : function(){ 
		
		assertEquals(0,checkFours([0,3,1,0,1,0]));
		assertEquals(12,checkFours([2,0,0,3,0,0]));
		assertEquals(20,checkFours([0,0,0,5,0,0]));
		}
	});

TestCase ( "Test for checkFives" , {
	"test should return the score reached with fives" : function(){ 
		
		assertEquals(0,checkFives([0,3,1,0,0,1]));
		assertEquals(15,checkFives([2,0,0,0,3,0]));
		assertEquals(25,checkFives([0,0,0,0,5,0]));
		}
	});

TestCase ( "Test for checkSixes" , {
	"test should return the score reached with sixes" : function(){ 
		
		assertEquals(0,checkSixes([0,3,1,0,1,0]));
		assertEquals(18,checkSixes([2,0,0,0,0,3]));
		assertEquals(30,checkSixes([0,0,0,0,0,5]));
		}
	});

TestCase ( "Test for checkThreeOfAKind" , {
	"test should return the eye sum of a number occurring exactly 3 times" : function(){ 

		assertEquals(3,checkThreeOfAKind([3,0,1,0,1,0]));
		assertEquals(6,checkThreeOfAKind([0,3,0,2,0,0]));
		assertEquals(18,checkThreeOfAKind([0,0,0,2,0,3]));
	},
		
	"test should return the eye sum of a number occurring more than 3 times" : function(){ 
		assertEquals(3,checkThreeOfAKind([4,0,1,0,0,0]));
		assertEquals(15,checkThreeOfAKind([0,0,1,0,4,0]));
		assertEquals(9,checkThreeOfAKind([0,0,5,0,0,0]));
		assertEquals(18,checkThreeOfAKind([0,0,0,0,0,5]));
	},	
		
	"test should return the score of 0 for no number occurring at least 3 times" : function(){ 
		assertEquals(0,checkThreeOfAKind([1,2,2,0,0,0]));
		assertEquals(0,checkThreeOfAKind([1,1,1,0,1,1]));
	}
	});

TestCase ( "Test for checkFourOfAKind" , {
	"test should return the eye sum of a number occurring exactly 4 times" : function(){ 
		
		assertEquals(4,checkFourOfAKind([4,0,0,0,1,0]));
		assertEquals(16,checkFourOfAKind([1,0,0,4,0,0]));
		assertEquals(24,checkFourOfAKind([0,0,0,0,1,4]));
	},
		
	"test should return the eye sum of a number occurring more than 4 times" : function(){ 
		assertEquals(8,checkFourOfAKind([0,5,0,0,0,0]));
		assertEquals(20,checkFourOfAKind([0,0,0,0,5,0]));
	},
		
	"test should return 0 if no number occurs at least 4 times" : function(){ 
		assertEquals(0,checkFourOfAKind([0,0,1,0,1,3]));
		assertEquals(0,checkFourOfAKind([1,0,1,0,1,2]));
		assertEquals(0,checkFourOfAKind([1,1,1,0,1,1]));
		}
	});

TestCase ( "Test for checkFullHouse" , {
	"test should return the score of 25 for a full house" : function(){ 
		
		assertEquals(25,checkFullHouse([3,2,0,0,0,0]));
		assertEquals(25,checkFullHouse([2,3,0,0,0,0]));
		assertEquals(25,checkFullHouse([2,0,0,0,0,3]));
		assertEquals(25,checkFullHouse([3,0,0,0,0,2]));
		assertEquals(25,checkFullHouse([0,0,0,3,2,0]));
	},
		
		"test should return the score of 0 for no full house" : function(){ 
		assertEquals(0,checkFullHouse([3,1,0,0,1,0]));
		assertEquals(0,checkFullHouse([2,2,0,1,0,0]));
		assertEquals(0,checkFullHouse([1,1,1,1,0,1]));
		assertEquals(0,checkFullHouse([0,4,0,0,0,1]));
		assertEquals(0,checkFullHouse([0,0,0,5,0,0]));
		}
	});

TestCase ( "Test for checkSmallStraight" , {
	"test should return the score of 30 for a small straight" : function(){ 
		
		assertEquals(30,checkSmallStraight([1,1,1,1,0,1]));
		assertEquals(30,checkSmallStraight([1,0,1,1,1,1]));
		assertEquals(30,checkSmallStraight([0,1,1,1,1,1]));
		assertEquals(30,checkSmallStraight([1,1,1,1,1,0]));
	},
	
		"test should return the score of 0 for no small straight" : function(){ 
		assertEquals(0,checkSmallStraight([1,0,1,1,0,1]));
		assertEquals(0,checkSmallStraight([0,1,1,1,0,1]));
		assertEquals(0,checkSmallStraight([0,2,1,1,1,0]));
		assertEquals(0,checkSmallStraight([4,0,1,0,0,0]));
		assertEquals(0,checkSmallStraight([0,0,0,0,0,5]));
		}
	});

TestCase ( "Test for checkLargeStraight" , {
	"test should return the score for an achieved large straight" : function(){ 
		
		assertEquals(40,checkLargeStraight([1,1,1,1,1,0]));
		assertEquals(40,checkLargeStraight([0,1,1,1,1,1]));
	},
	"test should return 0 for no large straight" : function(){ 
		
		assertEquals(0,checkLargeStraight([1,1,1,1,0,1]));
		assertEquals(0,checkLargeStraight([1,0,1,1,1,1]));
		assertEquals(0,checkLargeStraight([0,1,1,2,1,0]));
		assertEquals(0,checkLargeStraight([0,0,0,1,4,0]));
		}
	});

TestCase ( "Test for checkChance" , {
	"test should return the total eye sum" : function(){ 
		
		assertEquals(15,checkChance([1,1,1,1,1,0]));
		assertEquals(20,checkChance([0,1,1,1,1,1]));
		assertEquals(30,checkChance([0,0,0,0,0,5]));
		assertEquals(20,checkChance([0,2,0,0,2,1]));
		assertEquals(13,checkChance([3,0,0,0,2,0]));
		assertEquals(17,checkChance([0,0,4,0,1,0]));
		assertEquals(14,checkChance([1,0,3,1,0,0]));
		assertEquals(28,checkChance([0,0,0,0,2,3]));
		}
	});

TestCase ( "Test for checkYatzy" , {
	"test should return 50 for an achieved Yatzy" : function(){ 
		
		assertEquals(50,checkYatzy([5,0,0,0,0,0]));
		assertEquals(50,checkYatzy([0,0,0,5,0,0]));
		assertEquals(50,checkYatzy([0,0,0,0,0,5]));
	},
	"test should return 0 for no Yatzy" : function(){ 
		
		assertEquals(0,checkYatzy([1,0,0,0,0,4]));
		assertEquals(0,checkYatzy([0,2,0,0,3,0]));
		assertEquals(0,checkYatzy([2,0,1,0,0,2]));
		assertEquals(0,checkYatzy([1,1,0,1,1,1]));
		}
	});

TestCase ( "Test for checkBonus" , {
	"test should return the achieved bonus" : function(){ 
		
		assertEquals(35,checkBonus(63));
		assertEquals(35,checkBonus(79));
		assertEquals(35,checkBonus(100));
		},
		
	"test should return 0 if no bonus is achieved" : function(){ 
	
		assertEquals(0,checkBonus(-2));
		assertEquals(0,checkBonus(2));
		assertEquals(0,checkBonus(10));
		assertEquals(0,checkBonus(62));
	}
	});

TestCase ( "Test for checkYatzyBonus" , {
	"test should return the bonus for one additional Yatzy" : function(){ 
		
		assertEquals(50,checkYatzyBonus([5,2,6,16,20,18]));
		assertEquals(50,checkYatzyBonus([3,10,6,16,20,18]));
		assertEquals(50,checkYatzyBonus([3,2,15,16,20,18,]));
		assertEquals(50,checkYatzyBonus([3,2,6,20,20,18]));
		assertEquals(50,checkYatzyBonus([3,2,6,16,25,18]));
		assertEquals(50,checkYatzyBonus([3,2,6,16,20,30]));	
		},

	"test should return the bonus for two additional Yatzies" : function(){ 
		
		assertEquals(100,checkYatzyBonus([5,10,6,16,20,18]));
		assertEquals(100,checkYatzyBonus([3,10,6,16,25,18]));
		assertEquals(100,checkYatzyBonus([3,10,9,8,20,30,]));	
		},	
		
	"test should return the bonus for three additional Yatzies" : function(){ 
			
		assertEquals(150,checkYatzyBonus([5,10,6,16,20,30]));
		assertEquals(150,checkYatzyBonus([3,10,6,20,25,18]));
		assertEquals(150,checkYatzyBonus([3,10,15,16,20,30]));	
		},
		
	"test should return the bonus for more than three additional Yatzies" : function(){ 
		
		assertEquals(200,checkYatzyBonus([5,10,15,16,20,30]));
		assertEquals(250,checkYatzyBonus([5,10,15,20,25,18]));
		assertEquals(300,checkYatzyBonus([5,10,15,20,25,30]));	
		},	
	"test should return the bonus 0 if no additional Yatzy is achieved" : function(){ 
		
		assertEquals(0,checkYatzyBonus([3,8,9,16,20,24]));
		assertEquals(0,checkYatzyBonus([1,0,3,16,15,24]));
		assertEquals(0,checkYatzyBonus([2,10]));
		assertEquals(0,checkYatzyBonus([0,0,0,0,0]));
		assertEquals(0,checkYatzyBonus([]))
		},	
	});

TestCase ( "Test for calcSum" , {
	"test should return the sum of all array elements" : function(){ 
	
		assertEquals(14,calcSum([1,3,4,6]));
		assertEquals(2,calcSum([2]));
		assertEquals(3,calcSum([2,-2,3,0,0]));
		assertEquals(20,calcSum([2,2,2,2,2,2,2,2,2,2]));
		assertEquals(551,calcSum([430,120,1]));
		}
	});
