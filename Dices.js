function rollDice()
{
	return 1 + Math.floor(Math.random() * 6);
}

function rollDices(diceArray, holdArray)
{
	for(i=0;i<5;++i)
	{
		if(holdArray[i]!=1)
			diceArray[i] = rollDice();
	}
}

function holdDice(number, holdArray)
{
	holdArray[number] = 1;
}