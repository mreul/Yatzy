TestCase ( "Test for rollDice" , {
	"test should check if an integer between 1 and 6 is created " : function(){ 
		
		assertEquals(0, rollDice()%10);
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
		assertInteger(testDiceArray[i]);
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