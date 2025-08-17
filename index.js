let signupbtn=document.getElementById("signupbtn");
let siginbtn=document.getElementById("signoutbtn");
let title=document.getElementById("title");
let namegroup=document.getElementById("name");

siginbtn.onclick=function(){
    namegroup.style.maxHeight=0;
    title.innerText="Sign In";
    signupbtn.classList.add("disable-btn");
    siginbtn.classList.remove("disable-btn");

}

signupbtn.onclick=function(){
    namegroup.style.maxHeight="60px";
    title.innerText="Sign Up";
    signupbtn.classList.remove("disable-btn");
    siginbtn.classList.add("disable-btn");

}