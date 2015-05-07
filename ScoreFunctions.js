function countNumbers(number, array){
	var result = 0;
	for(i=0;i<array.length;++i)
		{
			if(array[i]==number)
				result++;
		}
	return result;
}

function createFreqs(array){
	var newArray = [];
	newArray[0] = countNumbers(1,array);
	newArray[1] = countNumbers(2,array);
	newArray[2] = countNumbers(3,array);
	newArray[3] = countNumbers(4,array);
	newArray[4] = countNumbers(5,array);
	newArray[5] = countNumbers(6,array);
	return newArray;
}

function checkOnes(array){
	 return array[0];
}

function checkTwos(array){
	return array[1]*2;
}

function checkThrees(array){
	return array[2]*3;
}

function checkFours(array){
	return array[3]*4;
}

function checkFives(array){
	return array[4]*5;
}

function checkSixes(array){
	return array[5]*6;
}

function checkThreeOfAKind(array){
	var result = 0;
	for(i=0;i<array.length;++i)
	{
		if(array[i]>=3)
			result = 3*(i+1);
	}
	return result;
}

function checkFourOfAKind(array){
	var result = 0;
	for(i=0;i<array.length;++i)
	{
		if(array[i]>=4)
			result = 4*(i+1);
	}
	return result;
}

function checkFullHouse(array){
	var flag3 = false;
	var flag2 = false;
	
	for(i=0;i<array.length;++i)
	{
		if(array[i]==3)
			flag3 = true;
	}
	for(j=0;j<array.length;++j)
	{
		if(array[j]==2)
			flag2 = true;
	}
	
	if(flag2&&flag3)
		return 25;
	else return 0;

}

function checkSmallStraight(array){
	for(i=0;i<array.length-3;++i)
	{
		if(array[i]==1&&array[i+1]==1&&array[i+2]==1&&array[i+3]==1)
			return 30;
	}
	return 0;
}

function checkLargeStraight(array){
	for(i=0;i<array.length-4;++i)
	{
		if(array[i]==1&&array[i+1]==1&&array[i+2]==1
				&&array[i+3]==1&&array[i+4]==1)
			return 40;
	}
	return 0;
}

function checkChance(array){
	return array[0]+array[1]*2+array[2]*3+array[3]*4+array[4]*5+array[5]*6;
}

function checkYatzy(array){
	for(i=0;i<array.length;++i)
	{
		if(array[i]==5)
			return 50;
	}
	return 0;
}

function checkBonus(sum){
	return sum>=63 ? 35:0;
}

function calcSum(array){
	var sum = 0;
	for(i=0;i<array.length;++i)
	{
		sum += array[i];
	}
	return sum;
}
