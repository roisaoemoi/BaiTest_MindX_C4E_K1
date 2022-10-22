
function snt(a)
{
    if(a<2) return false;
    if(a==2) return true;

    let c=Math.floor(Math.sqrt(a));

    for(let i=2;i<=c;i++)
    {
        if(a%i==0) return false;
    }

    return true;
}

let a=document.getElementById("a");
let b=document.getElementById("b");
let kq=document.getElementById("kq");

function showkq()
{
    kq.style.display="block";
    kq.innerHTML="Dãy các số nguyên tố từ a đến b là: ";
    for(let i=a.value;i<=b.value;i++)
    {
        if(snt(i))
        {
            kq.innerHTML+=" "+i;
        }
    }
}

a.oninput=function(){
    kq.style.display="none";
}

b.oninput=function(){
    kq.style.display="none";
}