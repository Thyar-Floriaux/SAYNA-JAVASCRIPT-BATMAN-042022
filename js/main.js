    // survol
    var nav_link=document.querySelectorAll("header nav a");
    var nav_underline=document.querySelectorAll("header nav a span");
    for (let i = 0; i < nav_link.length; i++) {
        nav_link[i].addEventListener("mouseover",(e)=>{
            nav_underline[i].style.width="100%";
            e.target.style.fontWeight="bolder"
        }); 
        nav_link[i].addEventListener("mouseout",(e)=>{
            if(e.target.classList.contains("active")==false)nav_underline[i].style.width="0";
            e.target.style.fontWeight=""
        });
    }

    // message
    document.querySelector("#submit").onclick=(e)=>{
        e.preventDefault();
        document.querySelector(".ipsum").style.display="flex";
        document.querySelector("form").style.display="none";
     }

     document.querySelector(".ipsum").onclick=()=>{
         document.querySelector(".ipsum").style.display="none";
        document.querySelector("form").style.display="block";
     }

    // fade in
    var titres=document.querySelectorAll(".titre");   
    var description=document.querySelector(".description");
    var text=["BATMAN AU CINÉMA","NÉMÉSIS","MULTIMÉDIA"];
    var fleche=document.querySelector(".image-scroll-btn div  img");
    function fadeIn() {
        description.style.transform="translateX(0)";
        fleche.style.transform="translate(0)";
        for (let i = 0; i < titres.length; i++) {
            titres[i].style.transform="translate(0)";
            titres[i].style.opacity="1";
            titres[i].textContent=text[i];
        }
        change.style.transform="translateX(10px)";
        for (let i = 0; i < im_pro.length; i++) {
            im_pro[i].style.transform="scale(1)";
        }
    }
    window.onload=fadeIn;

    // animation1
    var sousTitres=document.querySelectorAll(".sousTitres");

    // animation2
    var countour_left=document.querySelector(".gauche");

    // animation3
    var herosBtn=document.querySelector("heroBtn");
    var adveBtn=document.querySelector("adveBtn");

    if(herosBtn!=null && hero!=undefined){

    }
    if(herosBtn!=null && hero!=undefined){
            
    }
    
    // animation4
    var change=document.querySelector(".change");
    var im_pro=document.querySelectorAll(".im_pro");
    var descriPersonnage=document.querySelectorAll(".prs_desc");
    change.style.transition="1s"
    for (let i = 0; i < im_pro.length; i++) {
         im_pro[i].addEventListener("mouseover",function(){
            descriPersonnage[i].style.bottom="-10px"
            descriPersonnage[i].style.overflow="visible"
        });
        im_pro[i].addEventListener("mouseout",function(){
            descriPersonnage[i].style.bottom="";
            descriPersonnage[i].style.overflow="hidden "
        });
    }


    // animation5
    var point=document.querySelectorAll(".comp span");
    var citations=document.querySelectorAll(".citations");
    var counter2=0;
    setInterval(function () {
        document.querySelector(".compAct").classList.remove("compAct");
        point[counter2].classList.add("compAct");
        document.querySelector(".citations-active").classList.remove("citations-active");
        citations[counter2].classList.add("citations-active");
        counter2++;
        if(counter2==point.length){counter2=0;
        }
    },4500);

    // animation6
    var slider_content=document.querySelectorAll(".slide-content");
    var counter=0;
    setInterval(function () {
        for (let i = 0; i < slider_content.length; i++) {
            slider_content[i].style.transform="translateX(-200%)";
        }
        slider_content[counter].style.display="flex";
        slider_content[counter].style.transform="translateX(0%)" 
        counter++;
        if(counter==3){counter=0;}
    
    },5500);

    //scroll
    var elemScroll = document.querySelector(".soc");
    // var elemScroll2 = document.querySelector(".scroll2");
    window.addEventListener("scroll",()=>{
    const {scrollTop} = document.documentElement;
    if(scrollTop<=5400 && scrollTop>100)
    elemScroll.style.top=scrollTop+"px";
    console.log(scrollTop)
    });
    var urlBg=[""]