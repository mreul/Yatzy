var turns = 0;

function rollDice()
{
	return 1 + Math.floor(Math.random() * 6);
}

function rollDices(diceArray, holdArray)
{
	if(turns < 3)
	{
		for(i=0;i<5;++i)
		{
			if(holdArray[i]!=1)
				diceArray[i] = rollDice();
		}
		turns++;
	}
}

function holdDice(number, holdArray)
{
	holdArray[number] = 1;
}

function resetTurns()
{
	turns = 0;
}