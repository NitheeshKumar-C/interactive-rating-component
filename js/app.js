var value;
var error=document.getElementById('error');
        
function ratingValue(v){
    value=v;
    error.style.display="none";
}

function afterRating(){
    if(value==undefined){
        error.innerHTML='*Please select the rating';
    }
    else{
        var bRating=document.getElementById('br');
        bRating.style.display='none';

        var aRating=document.getElementById('ar');
        aRating.style.display='block';

        var rv=document.getElementById('rv');
        rv.innerHTML=value;

    }
}