
function calculate()
{
    var calc=document.getElementById("txt").value;
    var res=eval(calc);
    document.getElementById("txt").value=res;
}
var str="";
var str1="";
function funDelete()
{
    str=document.getElementById('txt').value;
    console.log(str);
    for(i=0;i<str.length-1;i++)
    {
        str1+=str.charAt(i);
    }
    // console.log(str1);
    document.getElementById('txt').value=str1;
    str="";
    str1="";
}