document.getElementById("id_bussiness_version").innerHTML = "Bussiness version: 2018.10.15.2";
function t_ec2()
{

this.citeste = function()
{
	this.a= document.getElementById("id_a").value;
	this.b= document.getElementById("id_b").value;
	this.c= document.getElementById("id_c").value;
	

}
this.calculeaza = function()
{
	var delta= this.b*this.b-4*this.a*this.c;
	var x1_re,x2_re,x1_im,x2_im;
	if(delta>= 0){;
		 x1 = (-this.b + Math.sqrt(delta))/(2*this.a);
		 x1 = (-this.b - Math.sqrt(delta))/(2*this.a);
		 x1_im=x2_im=0;
	}
	else{
		x1_re= -this.b/(2*this.a);
		x1_im=Math.sqrt(-delta))/(2*this.a);
		x2_re= -this.b/(2*this.a);
		x2_im=-Math.sqrt(-delta))/(2*this.a);
	}
this.x1 ={re:x1_re,im:x1_im}
this.x2 ={re:x2_re,im:x2_im}

}
this.afiseaza = function()
{
	document.getElementById("id_x1").innerHTML = this.x1_re+ "+" +this.x1_im + "i";
	document.getElementById("id_x2").innerHTML = this.x2_re+ "+" +this.x2_im + "i";
}
}

function rezolva()
{
	var ec2 = new t_ec2();
	
	ec2.citire();
	ec2.calculeaza();
	ec2.afiseaza():
	
	
}