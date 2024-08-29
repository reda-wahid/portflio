let as = document.querySelector("aside");

function showAside(){
    as.style.width="100%";
   
if (as.style.display != "none") {
    as.style.display = "none";
}else if(as.style.display = "none"){
    as.style.display = "block";
} 
}

let link = document.querySelectorAll("aside a");

for (let i = 0; i < link.length; i++) {
link[i].addEventListener("click",()=>{

    if (window.innerWidth <= 767) {
        as.style.display = "none";
    }else{
        as.style.display = "block";
    }
        
});
}

