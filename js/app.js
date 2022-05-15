var value;
var oldValue;
var error=document.getElementById('error');
var a;
function ratingValue(v){
    value=v;
    for(let i=1;i<=5;i++){
    
        if(value==i.toString())
        {
            console.log("yes "+i);
            a=document.getElementById(i);
            a.style.backgroundColor="var(--primaryOrange)";
            a.style.color="white";
            oldValue=value;
        }
        else{
            a=document.getElementById(i);
            a.style.backgroundColor="hsl(212, 16%, 21%)";
            a.style.color="var(--neutralLightGrey)";
        }
    }

    
    error.style.display="none";
}

function afterRating(){

    if(value==undefined){
        error.innerHTML='*Please select the rating';
    }
    else
    {
        var bRating=document.getElementById('br');
        bRating.style.display='none';

        var aRating=document.getElementById('ar');
        aRating.style.display='block';

        var rv=document.getElementById('rv');
        rv.innerHTML=value;

    }
}