const arrow = document.querySelectorAll(".section-5 .arrow i");
const cardsArr = document.querySelectorAll(".section-5 .box .cards");
const pointer = document.querySelectorAll(".section-5 .pointer p");

let count = 0;

function addFun(){
    slideShow(count += 1);
}

function subFun(){
    slideShow(count -= 1);
}

function slideShow(i){
    if(i == cardsArr.length){
        count = 0;
    }

    if(i < 0){
        count = cardsArr.length-1;
    }

    for(let x=0;x<cardsArr.length;x++){
        cardsArr[x].style.transform = `translateX(-${count}00%)`;
        pointer[x].classList.remove("active");
    }

    pointer[count].classList.add("active");
}

arrow[0].addEventListener("click", subFun);
arrow[1].addEventListener("click", addFun);


const images = document.querySelectorAll(".section-6 .image");

setInterval(scaleFun,1500);

function scaleFun(){
    images.forEach(item => {
        item.classList.remove("scale-active");
    })
    let randNum = Math.floor(Math.random() * images.length);
    images[randNum].classList.add("scale-active");
}