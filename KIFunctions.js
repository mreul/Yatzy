// called-variables for test purposes only
	var onesCalled = false;
	var twosCalled = false;
	var threesCalled = false;
	var foursCalled = false;
	var fivesCalled = false;
	var sixesCalled = false;
	var moreCalled = false;
	var straightCalled = false;
	var fullHouseCalled = false;
	var chanceCalled = false;
	
function tryOnes(dices, holdDices)
{
	onesCalled = true;
	holdDices = [0,0,0,0,0];
	for(var i = 0;i<5;i++)
	{
		if(holdDices[i]==1&&dices[i]!=1)
			holdDices[i]==0;
		if(dices[i]==1)
			holdDices[i]=1;
	}
	return holdDices;
}

function tryTwos(dices, holdDices)
{
	twosCalled = true;
	holdDices = [0,0,0,0,0];
	for(var i = 0;i<5;i++)
	{
		if(holdDices[i]==1&&dices[i]!==2)
			holdDices[i]==0;
		if(dices[i]==2)
			holdDices[i]=1;
	}
	return holdDices;
}

function tryThrees(dices, holdDices)
{
	threesCalled = true;
	holdDices = [0,0,0,0,0];
	for(var i = 0;i<5;i++)
	{
		if(holdDices[i]==1&&dices[i]!==3)
			holdDices[i]==0;
		if(dices[i]==3)
			holdDices[i]=1;
	}
	return holdDices;
}

function tryFours(dices, holdDices)
{
	foursCalled = true;
	holdDices = [0,0,0,0,0];
	for(var i = 0;i<5;i++)
	{
		if(holdDices[i]==1&&dices[i]!==4)
			holdDices[i]==1;
		if(dices[i]==4)
			holdDices[i]=1;
	}
	return holdDices;
}

function tryFives(dices, holdDices)
{
	fivesCalled = true;
	holdDices = [0,0,0,0,0];
	for(var i = 0;i<5;i++)
	{
		if(holdDices[i]==1&&dices[i]!==5)
			holdDices[i]==1;
		if(dices[i]==5)
			holdDices[i]=1;
	}
	return holdDices;
}

function trySixes(dices, holdDices)
{
	sixesCalled = true;
	holdDices = [0,0,0,0,0];
	for(var i = 0;i<5;i++)
	{
		if(holdDices[i]==1&&dices[i]!==6)
			holdDices[i]==1;
		if(dices[i]==6)
			holdDices[i]=1;
	}
	return holdDices;
}

function tryMoreOfAKind(dices, freqs, holdDices)
{
	moreCalled = true;
	holdDices = [0,0,0,0,0];
	for(var i = 0;i<6;i++)
	{
		if(freqs[i]>=3)
		{	
			for(var j = 5;j>0;j--)
			{
				if(dices[j]==i+1)
					holdDices[j]=1;
			} 
			return holdDices;
		}
	}	
	var flag = 0;
	//fix big numbers occurring once or twice
	for(var k=5;k>0;k--)
	{
		if(dices[k]==6)
		{
			holdDices[k]=1;
			flag = 1;
		}
	}
	if(flag==1) return holdDices;
	else flag == 0;
	for(var k=5;k>0;k--)
	{
		if(dices[k]==5)
		{
			holdDices[k]=1;
			flag = 1;
		}
	}
	if(flag==1) return holdDices;
	else flag == 0;

	return holdDices;
}

function tryFullHouse(dices, freqs, holdDices)
{
	fullHouseCalled = true;
	for(var i = 0;i<6;i++)
	{
		//fix numbers occurring three times
		if(freqs[i]==3)
		{	
			for(var j = 0;j<5;j++)
			{
				if(dices[j]==i+1)
					holdDices[j]=1;
			} 
		}
	}
	//fix numbers occurring twice and count how often this is the case
	var count = 0;
	for(var k = 0;k<6;k++)
	{
		if(freqs[k]==2)
		{	
			count++;
			for(var l = 0;l<5;l++)
			{
				if(dices[l]==k+1)
					holdDices[l]=1;
			} 
		}
	}
	//if only one number occurs twice or three times fix one additional number
	if(count<2&&holdDices!=[1,1,1,1,1])
	{
		for (var m =0;m<5;m++)
		{
			if(holdDices[m]!=1)
			{
				holdDices[m]=1;
				break;
			}
		}	
				
	}
	return holdDices;
}

function tryStraight(dices,freqs, holdDices)
{
	straightCalled = true;
	//release numbers that are already fixed twice or more times
	for(var k = 0;k<5;k++)
	{
		if(holdDices[k]==1)
		{	
			var value = dices[k];
			for(var l =0;l<5;l++)
			{
				if(dices[l]==value&&holdDices[l]==1)
				{
					holdDices[l]=0;
				}
			}
		}
	}
	//fix straights
	for(var i = 0;i<5;i++)
	{
		if(freqs[i]>0&&freqs[i+1]>0)
		{
			for(var j = 0;j<5;j++)
			{
				if(dices[j]==i+1)
				{
					holdDices[j]=1;
					break;
				}	
			}
			for(var k = 0;k<5;k++)
			{
				if(dices[k]==i+2)
				{
					holdDices[k]=1;
					break;
				}	
			}
		}
	}
	return holdDices;
}

function tryChance(dices, holdDices)
{
	chanceCalled = true;
	for(var i=0;i<5;i++)
	{
		if(dices[i]==6)
			holdDices[i]=1;
		if(dices[i]==5)
			holdDices[i]=1;
		if(dices[i]==4)
			holdDices[i]=1;
		if(dices[i]==3)
			holdDices[i]=0;
		if(dices[i]==2)
			holdDices[i]=0;
		if(dices[i]==1)
			holdDices[i]=0;
	}	
	return holdDices;
}

//First and second automatic draw 
function simpleKiDraw(catFixed, dices, freqs, holdDices)
{
	if(catFixed[11]==0||catFixed[6]==0||catFixed[7]==0)
	{
		for(var i = 0;i<6;i++)
		{
			if(freqs[i]>3)
			{
				tryMoreOfAKind(dices, freqs, holdDices);	
			}
		}
	}
	if(catFixed[10]==0||catFixed[9]==0)
	{
		for(var j = 0;j<4;j++)
		{
			if(freqs[j]>=1&&freqs[j+1]>=1&&freqs[j+2]>=1)
			{
				tryStraight(dices, freqs, holdDices);
			}	
		}
	}
	if(catFixed[8]==0)
	{
		for(var k = 0;k<4;k++)
		{
			if(freqs[k]>=2)
			{
				tryFullHouse(dices, freqs, holdDices);
			}	
		}
	}
	if(catFixed[5]==0&&freqs[5]>=2)
		trySixes(dices,holdDices);
	if(catFixed[4]==0&&freqs[4]>=2)
		tryFives(dices,holdDices);
	if(catFixed[3]==0&&freqs[3]>=2)
		tryFours(dices,holdDices);
	if(catFixed[2]==0&&freqs[2]>=2)
		tryThrees(dices,holdDices);
	if(catFixed[1]==0&&freqs[1]>=2)
		tryTwos(dices,holdDices);
	if(catFixed[0]==0&&freqs[0]>=2)
		tryOnes(dices,holdDices);
	
	tryChance(dices,holdDices);
}
//third automatic draw
function finalKiDraw(points, catFixed)
{
	var num = points[0];
	var pos = 0;
	for(var i = 0;i<13;i++)
	{
		if(points[i]>num&&catFixed[i]==0)
		{
			num = points[i];
			pos = i;
		}
	}
	catFixed[pos] = 1;
}
