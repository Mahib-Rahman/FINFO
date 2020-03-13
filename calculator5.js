function calc5()
{
	var current_loan_amount = 0, intrest_sum = 0, loan_intrest = 0, month = 0, loan_amount = 0;

	current_loan_amount = document.getElementById("text1").value;
	loan_intrest = document.getElementById("text2").value;
	month = document.getElementById("text3").value;
	
	loan_amount = current_loan_amount;

	loan_intrest = 1 + ((loan_intrest/100)/12);

	var monthly_payment = 0;
						
	while(loan_amount > 0)
	{
		intrest_sum += (loan_amount * loan_intrest - loan_amount);
		loan_amount = loan_amount * loan_intrest;
		loan_amount = loan_amount - (loan_amount / month);
		month++;
	}
						
	current_loan_amount += intrest_sum;
	monthly_payment = current_loan_amount / month;
						
	document.getElementById("answer").innerHTML = monthly_payment;
}

