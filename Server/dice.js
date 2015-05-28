var dices = new Array(5);
this.throwDices = function()
{
	for (var i = 0; i < 5; i++)
	{
		dices[i] = Math.floor(Math.random()*6+1);
	}	
};
	
this.getDices = function()
{
	return dices;
};

