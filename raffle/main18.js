function getInfo()
{
	option_one = opt1.value;
	option_two = opt2.value;
	option_three = opt3.value;
	option_four = opt4.value;
	option_five = opt5.value;
	option_six = opt6.value;
	option_seven = opt7.value;
	option_eight = opt8.value;
	option_nine = opt9.value;
	option_ten = opt10.value;
	option_eleven = opt11.value;
	option_twelve = opt12.value;
	option_thirteen = opt13.value;
	option_fourteen = opt14.value;
	option_fifteen = opt15.value;
	option_sixteen = opt16.value;
	option_seventeen = opt17.value;
	option_eighteen = opt18.value;
}
function chooseWinner()
{
	option_group = [option_one, option_two, option_three, option_four, option_five, option_six, option_seven, option_eight, option_nine, option_ten, option_eleven, option_twelve, option_thirteen, option_fourteen, option_fifteen, option_sixteen, option_seventeen, option_eighteen];
	the_rand = option_group[Math.floor(Math.random() * option_group.length)];
	if(the_rand == "")
	{
		document.getElementById("result_r").innerHTML = " Mr. Davison!";
		document.body.style.backgroundImage = "url('images/mrd.png')";
		document.body.style.backgroundColor = "#4AE6F0";
	}
	else{
		document.getElementById("result_r").innerHTML = " " + the_rand + "!";
		document.body.style.backgroundImage = "url('images/chicken.png')";
		document.body.style.backgroundColor = "#F0CA4A";
	/*alert("You are going to " + the_rand + ".");*/
	}
}
function theTimer()
{
	setTimeout('chooseWinner()', 2000);
	document.getElementById("result_r").innerHTML =  '<span id = "result_r" class="loader"><class="loader__dot">.</span><span class="loader__dot">.</span><span class="loader__dot">.</span></span>';
}
function refreshPage()
{
	location.reload(true);
}
addEventListener("keyup", function(event) 
	{
		event.preventDefault();
		if (event.keyCode === 13) 
		{
			theTimer();
		}
	}
	);

