function calc3()
{
	var months = 0;
	var savings_rate, income, savings_goal;
	var current_savings = 0,  monthly_income;
	
	savings_goal = document.getElementById("text1").value;
	income = document.getElementById("text2").value;
	savings_rate = document.getElementById("text3").value;
	
	savings_rate = 1 + savings_rate/100;
	monthly_income = income/12;
					
	for(var i = 0;current_savings > savings_goal; i++)
	{
		current_savings += savings_rate*monthly_income;
		current_savings = current_savings*(1+(.04/12));
		
		months = i;
	}
										
	document.getElementById("answer").innerHTML = months;
}
