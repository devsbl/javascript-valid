function checkPesel(value)
{
	var pesel = value.replace(/[\ \-]/gi, ''); 
	if (pesel.length != 11)
	{
		return false;
	}
	else 
	{
		var steps  = new Array(1, 3, 7, 9, 1, 3, 7, 9, 1, 3); 
		var sum_nb = 0;

		for (var x = 0; x < 10; x++)
		{
			sum_nb += steps[x] * pesel[x];
		}

		sum_m = 10 - sum_nb % 10;

		if (sum_m == 10)
		{ 
			sum_c = 0;
		}
		else
		{
			sum_c = sum_m;
		}

		if (sum_c != pesel[10])
		{
			return false;
		}
	}
	return true;	
};

function checkIDnumber(numer)
{
	numer = numer.replace(' ', '');
	numer = numer.replace('-', '');
	
	//Check length
	if (numer == null || numer.length != 9)
	return false;
	 
	numer = numer.toUpperCase();
	letterValues = [
	'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
	'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
	'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
	'U', 'V', 'W', 'X', 'Y', 'Z'];
	function getLetterValue(letter)
	{
		for (j=0; j<letterValues.length; j++)
		if (letter == letterValues[j])
		return j;
		return -1;
	}
	 
	//Check seria
	for (i=0; i<3; i++)     
	if (getLetterValue(numer[i]) < 10)
	return false;
	//Check number
	for (i=3; i<9; i++)
	if (getLetterValue(numer[i]) < 0 || getLetterValue(numer[i]) > 9)
	return false;
	 
	//sprawdz cyfre controlna
	sum = 7 * getLetterValue(numer[0]) +
	3 * getLetterValue(numer[1]) +
	1 * getLetterValue(numer[2]) +
	7 * getLetterValue(numer[4]) +
	3 * getLetterValue(numer[5]) +
	1 * getLetterValue(numer[6]) +
	7 * getLetterValue(numer[7]) +
	3 * getLetterValue(numer[8]);
	sum %= 10;
	if (sum != getLetterValue(numer[3]))
	return false;
	 
	return true;
}
