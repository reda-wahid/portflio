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

let submit = document.querySelector(".sub");

function Emailsend() {
    let params = {
        name: document.querySelector(".name").value,
        email: document.querySelector(".email").value,
        description: document.querySelector(".description").value,
        suject: document.querySelector(".suject").value,
    
    }
    
    emailjs.send("service_aaah5d7","template_bg5rmvi",params).then(alert("email sent"));  
}

submit.addEventListener("click", () => {
Emailsend()
});