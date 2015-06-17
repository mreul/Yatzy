function tryOnes(dices, holdDices)
{
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
