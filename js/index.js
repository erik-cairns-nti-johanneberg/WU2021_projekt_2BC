let button=document.querySelector('.menu_button');
button.addEventListener('click', function (e) 
{
    document.querySelector('.hidden_nav').classList.toggle('active');
});

function slideshow(){
    if (window.innerWidth < 900) {
        console.log("debuggsak")
        
        var myIndex = 0;                                                          
        carousel();  

        function carousel() {
            var i;
            var x = document.getElementsByClassName("mySlides");
            for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";  
            }
            myIndex++;
            if (myIndex > x.length) {myIndex = 1}    
            x[myIndex-1].style.display = "block";  
            setTimeout(carousel, 3500);                                  
        }
        
    }
}



window.addEventListener('resize', slideshow);
