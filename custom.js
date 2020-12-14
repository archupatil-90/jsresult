/*let owt="the one web technology"
{
     owt="archana";
    document.write(owt);

}

document.write(owt);*/
let txt;
let sub1,sub2,sub3,sub4,sub5,percent, marks;

sub1=parseInt( prompt("enter subject 1 marks:"));
sub2=parseInt( prompt("enter subject 2 marks:"));
sub3=parseInt( prompt("enter subject 3 marks:"));
sub4=parseInt( prompt("enter subject 4 marks:"));
sub5=parseInt( prompt("enter subject 5 marks:"));
if(txt=confirm("do you want to print your result"))
{
document.write("sub 1 marks :"+sub1+"<br/>");
document.write("sub 2 marks :"+sub2+"<br/>");
document.write("sub 3 marks :"+sub3+"<br/>");
document.write("sub 4 marks :"+sub4+"<br/>");
document.write("sub 5 marks :"+sub5+"<br/>");
// let x=parseInt(sub1);
// let y=parseInt(sub2);
// let total = x + y;
let total=sub1+sub2+sub3+sub4+sub5;
document.write("your total "+total+"<br/>");

percent=total/5;
document.write("your percent "+percent+"<br/>");
if( percent>=75)
{
document.write("you pass with distinction");

}
else if ( percent<75 && percent>=60  )
{
document.write("you pass with first class");
}
else if(  percent<60 && percent>=45  ){
    document.write("you pass with second class");
    }

else if(percent<45 && percent>=35 ){
    document.write("you pass with pass class");
    }
    else 
    {
        document.write("you are fail");
        }


    }
