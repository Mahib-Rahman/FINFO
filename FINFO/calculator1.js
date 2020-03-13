function calc1()
{
	var total_cost = 1, down_payment = 1, intrest_rate = 1, years = 1, yearly_payment = 1, monthly_payment = 1, total_paid = 0;
	
	total_cost = document.getElementById("text1").value;
	down_payment = document.getElementById("text2").value;
	intrest_rate = document.getElementById("text3").value;
	years = document.getElementById("text4").value;
	if(intrest_rate >= 1)
	{
		intrest_rate = intrest_rate/100;
	}
	
	var loan_amount = total_cost - down_payment;
					
	for (var i = 0; i < years; i++)
	{
		loan_amount = loan_amount * (1 + intrest_rate);
		yearly_payment = loan_amount/years;
		loan_amount = loan_amount - yearly_payment;
		total_paid += yearly_payment;
	}
						
	monthly_payment = total_paid/years/12;
						
	document.getElementById("answer").innerHTML = monthly_payment;
}
