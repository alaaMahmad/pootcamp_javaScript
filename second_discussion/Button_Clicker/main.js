function login(element){ 
    if(element.innerText == "Login"){
        element.innerText = "Logout";
    } else {
        element.innerText = "Login";
    }   
}
 function remove(element){
    element.remove();
}

function over(element){
    console.log(element);
        element.style.backgroundColor = "blue"
    }
 
function out(element){
    console.log(element);
        element.style.backgroundColor = "red"   
 }

 var likesNum = document.querySelector('.num');
function add(){
    likesNum.innerText = parseInt(likesNum.innerText)+1;
}

