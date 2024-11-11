// document.getElementById('logo2').addEventListener('click', fuction(){
//     this.style.backgroundImage = 'url('streetFighter-logo2.png')';
// })

let divLogoDois = document.getElementById('logo2')
divLogoDois.addEventListener('click', function img1(){
    divLogoDois.style.backgroundImage = "url('streetfighter2 - title.png')"
    divLogoDois.style.backgroundSize = "80%"
    divLogoDois.style.top = "-507px"
    divLogoDois.style.left = "99px"

    if(divLogoDois.style.backgroundImage = "url('streetfighter2 - title.png')"){
        divLogoDois.addEventListener('click', function img2(){ 
            divLogoDois.style.backgroundImage = "url('streetfighter1 - logo.png')"
            divLogoDois.style.backgroundSize = "80%"
            divLogoDois.style.top = "-465px"
            divLogoDois.style.left = "97px"
        })
    }
})


// background-image: url('SF - Header Logo Centralized.png');

let ex = document.getElementById('ex');
let chara = document.getElementById('chara');
let charaIcon = document.getElementById('charactersicon');
let curi = document.getElementById('curi');
let curiIcon = document.getElementById('curiositiesicon');
let quiz = document.getElementById('quiz');
let quizIcon = document.getElementById('quizicon');
let news = document.getElementById('news');
let newsIcon = document.getElementById('newslettericon');

charaIcon.addEventListener("mouseover", function charaIn(){
    ex.style.visibility = 'hidden';
    chara.style.visibility = 'visible';
})

charaIcon.addEventListener("mouseout", function charaOut(){
    ex.style.visibility = 'visible';
    chara.style.visibility = 'hidden';
})

curiIcon.addEventListener("mouseover", function(){
    ex.style.visibility = 'hidden';
    curi.style.visibility = 'visible';
})

curiIcon.addEventListener("mouseout", function(){
    ex.style.visibility = 'visible';
    curi.style.visibility = 'hidden';
})

quizIcon.addEventListener("mouseover", function(){
    ex.style.visibility = 'hidden';
    quiz.style.visibility = 'visible';
})

quizIcon.addEventListener("mouseout", function(){
    ex.style.visibility = 'visible';
    quiz.style.visibility = 'hidden';
})

newsIcon.addEventListener("mouseover", function(){
    ex.style.visibility = 'hidden';
    news.style.visibility = 'visible';
})

newsIcon.addEventListener("mouseout", function(){
    ex.style.visibility = 'visible';
    news.style.visibility = 'hidden';
})

/*let city = document.getElementById('city');
let icons = document.getElementById('icons');

if(icons.style.opacity = '1'){
    city.style.filter = 'blur(4px)';
}

if(icons.style.opacity = '0'){
    city.style.filter = 'blur(0px)';
}*/