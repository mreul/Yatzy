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

this.getCountArray = function()
{
	var countArr = new Array(6);
	
	for (var i = 0; i < 6; i++)
	{
		countArr[i] = 0;
	}
	
	for (var i = 0; i < 6; i++)
	{		
		countArr[dices[i]-1]++;
	}
	
	return countArr;
};

