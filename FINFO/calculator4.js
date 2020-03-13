function calc4()
{
	var income, savings_rate, years, total_savings = 0;
	
	income = document.getElementById("text1").value;
	savings_rate = document.getElementById("text2").value;
	years = document.getElementById("text3").value;

	savings_rate = savings_rate/100;
					
	for (var i = 0; i < years; i++)
	{
		total_savings += income*savings_rate;
		total_savings = total_savings*1.07;
	}

						
	document.getElementById("answer").innerHTML = total_savings;
}
