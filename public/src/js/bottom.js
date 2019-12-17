function invertcolor()
{
	//alert("invertcolor");
	var body=document.getElementsByTagName("body")[0];
	var darktheme=document.getElementsByName("darktheme")[0];
	var logo=document.getElementsByName("logo")[0];
	var maindiv=document.getElementsByClassName("maindiv")[0];
	console.log(body);
	if(body.style.backgroundColor!="black")
	{
		//alert("if");
		body.style.backgroundColor="black";
		maindiv.color="white";
		darktheme.src="\./images/icon/darkthemebv.jpg";
		logo.src="images/logo/androidifi_logobv.jpg";
	}
	else
	{
		//alert("else");
		body.style.backgroundColor="#fcf7f7";
		maindiv.color="black";
		darktheme.src="\./images/icon/darktheme.jpg";
		logo.src="images/logo/androidifi_logo.jpg";
	}
}

document.write('<div style="position:relative;top:13vh;float:right;" class="maindiv"><table><tr><td><img src="\./images/icon/darktheme.jpg" onclick="invertcolor()" name="darktheme"></td><td onclick="invertcolor()">DARK THEME</td></tr></table></div>');