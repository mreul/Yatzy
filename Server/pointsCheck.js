this.pointsCheck = function()
{
};

this.setThrow = function(diceThrow) // Setze Anzahl-Array
{
	this.diceThrow = diceThrow;
};

this.checkOne = function()
{
	var res = 1;
	res *= this.diceThrow[0];
	return res;
};

this.checkTwo = function()
{
	var res = 2;
	res *= this.diceThrow[1];
	return res;
};

this.checkThree = function()
{
	var res = 3;
	res *= this.diceThrow[2];
	return res;
};

this.checkFour = function()
{
	var res = 4;
	res *= this.diceThrow[3];
	return res;
};

this.checkFive = function()
{
	var res = 5;
	res *= this.diceThrow[4];
	return res;
};

this.checkSix = function()
{
	var res = 6;
	res *= this.diceThrow[5];
	return res;
};

this.checkTriple = function()
{
	var res = 0;
	for(var i=0;i<6;++i)
	{
		if(this.diceThrow[i]>=3)
			res = 3*(i+1);
	}
	return res;
}

this.checkQuad = function()
{
	var res = 0;
	for(var i=0;i<6;++i)
	{
		if(this.diceThrow[i]>=4)
			res = 4*(i+1);
	}
	return res;
}

this.checkFullHouse = function()
{
	var check = -1;
	for (var i = 0; i < 6; i++)
	{
		if (this.diceThrow[i] == 3)
			check = i;
	}
	
	if (check >= 0)
	{
		for (var i = 0; i < 6; i++)
		{
			if (this.diceThrow[i] >= 2 && i != check)
				return 25;	
		}
	}
	return 0;
};

this.checkSmallStreet = function()
{
	for (var i = 0; i < 3; i++)
	{
		if (this.diceThrow[i] > 0 && this.diceThrow[i+1] > 0 && this.diceThrow[i+2] > 0 && this.diceThrow[i+3] > 0)
			return 30;
	}
	return 0;
};

this.checkBigStreet = function()
{
	for (var i = 0; i < 2; i++)
	{
		if (this.diceThrow[i] > 0 && this.diceThrow[i+1] > 0 && this.diceThrow[i+2] > 0 && this.diceThrow[i+3] > 0 && this.diceThrow[i+4] > 0)
			return 40;
	}
	return 0;
};

this.checkYatzy = function()
{
	for (var i = 0; i < 6; i++)
	{
		if (this.diceThrow[i] == 0)
			return 0;
	}
	return 50;
};

this.checkChance = function()
{
	var res = 0;
	
	for (var i = 0; i < 6; i++)
	{
		res += this.diceThrow[i] * (i+1);
	}
	return res;
};

this.createPoints = function()
{
	var points = new Array(13);
	points[0] = this.checkOne();
	points[1] = this.checkTwo();
	points[2] = this.checkThree();
	points[3] = this.checkFour();
	points[4] = this.checkFive();
	points[5] = this.checkSix();
	points[6] = this.checkTriple();
	points[7] = this.checkQuad();
	points[8] = this.checkFullHouse();
	points[9] = this.checkSmallStreet();
	points[10] = this.checkBigStreet();
	points[11] = this.checkYatzy();
	points[12] = this.checkChance();
	
	return points;
};