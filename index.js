let openMenu = document.querySelector('#burger');
let closeMenu = document.querySelector('#cross');
let navbar = document.querySelector("#nav-list");

let open = () =>{
    

    openMenu.style.display = "none";
    closeMenu.style.display = "block";
    navbar.style.top = "-0.2rem";
    navbar.style.transition= "all 1s";
    
}

let close = ()=>{
   closeMenu.style.display = "none";
   openMenu.style.display = "block";
   navbar.style.top = "-8rem";
   navbar.style.transition= "all 1s";
 }


 openMenu.addEventListener('click',open);
 closeMenu.addEventListener('click',close);




let sty_btn = document.getElementById("stickey_btn");

 window.onscroll = function(){
  
scrolly();
 }


 function scrolly(){
  let scroll_y = window.scrollY;

  if(scroll_y >100  ){
    sty_btn.style.display = "block";
  }else{
    sty_btn.style.display = "none";

  }
  
 }


 

 let web = document.querySelector("#web-btn");
 let cs = document.querySelector("#cs-btn");

 let web_cont = document.querySelector("#website");
 let cs_cont = document.querySelector("#case-study");

 
 const show =()=>{
   web_cont.style.display ="block";
   cs_cont.style.display="none";
   
 } 
 const show2 =()=>{
  web_cont.style.display ="none";
  cs_cont.style.display="flex";
} 
web.addEventListener('click',show);
  cs.addEventListener('click',show2);