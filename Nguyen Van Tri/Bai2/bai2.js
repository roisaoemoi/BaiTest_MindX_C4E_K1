let kq=document.getElementById("kq");
let showkq=document.getElementById("showkq");
let a=document.getElementById("a");

function numberOneTriangle(a)
{   
    let s=""
    for(let i=1;i<=a;i++)
    {
        for(let j=1;j<=i;j++)
        {
            s+="*";
        }
        s+="<br>";
    }
    return s;
}

kq.onclick=function(){
    showkq.style.display="block";
    showkq.innerHTML=numberOneTriangle(a.value);
}

function nonekq()
{
    showkq.style.display="none";
}