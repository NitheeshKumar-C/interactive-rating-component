var value;
var oldValue='';
var error=document.getElementById('error');
var a;
function ratingValue(v){
    value=v;
    if(oldValue!=''){
        a=document.getElementsByClassName('input-rating')[parseInt(oldValue)-1];
        a.style.backgroundColor="hsl(212, 16%, 21%)";
        a.style.color="white";
        oldValue='';
    }
    a=document.getElementsByClassName('input-rating')[parseInt(value)-1];
    a.style.backgroundColor="var(--primaryOrange)";
    a.style.color="white";
    oldValue=value;

    
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