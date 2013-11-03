/*
 * Validate ID
 *
 */
 
$('.validateID').change(function(e){
		var number = $(this).val();
		    number = number.replace('-','');
		    number = number.replace(' ','');

		if( !checkIDnumber(number) )
		{
			$(this).val('');
			alert('Wpisz poprawny seriÄ i numer dowodu osobistego!');
		}
		else
		{
			$(this).val(number);
		}
	});
	
	
	/*
	 *  Validate PESEL
	 *
	 */
	
	$('.validatePesel').change(function(e){
		var number = $(this).val().replace('-','');

		if( !checkPesel(number) )
		{
			$(this).val('');
			alert('Wpisany numer PESEL jest niepoprawny!');
		}
		else
		{
			$(this).val(number);
		}
	});
