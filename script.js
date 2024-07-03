let Button1 = document.querySelector('.button1');
let Button2 = document.querySelector('.button2');
let imageOne = document.querySelector('.image1');


Button2.addEventListener('click', function(){
    imageOne.style.display = "none";
    
});

Button1.addEventListener('click', function(){
    imageOne.style.display = "block";
    
});