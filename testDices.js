TestCase ( "Test for rollDice" , {
	"test should check if an integer between 1 and 6 is created " : function(){ 
		
		assertEquals(0, rollDice()%1);
		assertTrue(rollDice()<7);
		assertTrue(rollDice()>0);
		}
	});

TestCase ( "Test for rollDices" , {
	"test should check if an array of 5 integer values is created " : function(){ 
		
		var testDiceArray = [];
		var testHoldArray = [0,0,0,0,0];
		rollDices(testDiceArray, testHoldArray);
		assertEquals(5, testDiceArray.length);
		for(i = 0;i<5;i++)
		assertEquals(0, testDiceArray[i]%1);
		},
	"test should check that dices can be rolled only three times until reset" : function(){ 
	
		var testDiceArray = [];
		var testHoldArray = [0,0,0,0,0];
		rollDices(testDiceArray, testHoldArray);
		assertFalse(testHoldArray==[]);
		rollDices(testDiceArray, testHoldArray);
		rollDices(testDiceArray, testHoldArray); //rolled the dices three times
		
		testDiceArray = [1,2,3,4,5]; //fictive dice results
		rollDices(testDiceArray, testHoldArray); //rolling the dices a fourth time
		assertEquals([1,2,3,4,5], testDiceArray); //dices should remain unchanged
		rollDices(testDiceArray, testHoldArray); // checking again
		assertEquals([1,2,3,4,5], testDiceArray);
		
		testDiceArray = [];
		resetTurns();
		rollDices(testDiceArray, testHoldArray);
		assertFalse(testHoldArray==[]);
	}
	});

TestCase ( "Test for holdDice" , {
	"test should check if a dice can be hold for the next turn" : function(){ 
		
		var testDiceArray = [3,3,2,5,6];
		var testHoldArray = [0,0,0,0,0];
		holdDice(1,testHoldArray);
		holdDice(4,testHoldArray);
		holdDice(3,testHoldArray);
		rollDices(testDiceArray, testHoldArray);
		assertEquals(3, testDiceArray[1]);
		assertEquals(6, testDiceArray[4]);
		assertEquals(5, testDiceArray[3]);
		}
	});