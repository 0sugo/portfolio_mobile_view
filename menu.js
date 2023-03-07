var menu_toggle= document.getElementById("overlay");

var cancel_toggle= document.getElementById("cancel");

function toggler (){
if(menu_toggle.style.display==="block" && cancel_toggle.style.display ==="block"){
    menu_toggle.style.display="none";
    cancel_toggle.style.display="none";
}else{
    menu_toggle.style.display="block";
    cancel_toggle.style.display="block";
}

}

function toggler2 (){
    if(cancel_toggle.style.display ==="block"){
        cancel_toggle.style.display="none";
    }else{
        cancel_toggle.style.display="block";
    }
    
    }
