let scrollIcon = document.querySelector(".scroll-icon");
let scrollBar = document.querySelector(".scroll-bar")
let links = document.querySelectorAll(".nav-link")

links.forEach(function (item) {
    item.addEventListener("click" , function (e) {
        e.preventDefault();
        let targetElement = document.getElementById(item.dataset.target);
        window.scrollTo({
            top : targetElement.offsetTop - 150, 
            behavior: "smooth",
        });
    });
});


window.addEventListener("scroll" , function(){

    let navScroll =
    document.documentElement.scrollTop / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
        scrollBar.style.width = `${navScroll *100}%`;
    
    if ( window.scrollY > 200){
        scrollIcon.style.display = "block";
    }else{
        scrollIcon.style.display = "none";

    }
});

scrollIcon.addEventListener("click", function(){
    window.scrollTo({
        top : 0,
    });
});

