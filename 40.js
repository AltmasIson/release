var btn = document.querySelector("button")
var h4 = document.querySelector("h4")
var flag =0
btn.addEventListener("click",function(){
    if(flag==0){
    h4.innerHTML= "Friend"
    h4.style.color = "green"
    h4.style.backgroundColor = "yellow"
    flag = 1
    }else{
        h4.innerHTML= "stranger"
    h4.style.color = "red"
    h4.style.backgroundColor = "yellow" 
    flag = 0
    }
})