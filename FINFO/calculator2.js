function calc2()
{
	var annual_salary = 1, portion_saved = 1, total_cost = 1, current_savings = 0, month = 0;
	
	annual_salary = document.getElementById("text1").value;
	portion_saved = document.getElementById("text2").value;
	total_cost = document.getElementById("text3").value;
	current_savings = document.getElementById("text4").value;
	if(portion_saved >= 1)
	{
		portion_saved = portion_saved/100;
	}
	
	var down_payment = total_cost * 0.25;
	var rate = (0.04 / 12) + 1;
						
	while (current_savings < down_payment)
	{
	current_savings = ((current_savings + (portion_saved * (annual_salary / 12))) * rate);
	month += 1;
	}
						
	document.getElementById("answer").innerHTML = month;
}

