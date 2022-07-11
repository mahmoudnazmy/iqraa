let HadithContainer = document.querySelector('.cont');
let next = document.querySelector('.btns .next')
let prev = document.querySelector('.btns .prev')
let number = document.querySelector('.btns .number')
let hadithindex = 0

hadithchanger();
function hadithchanger(){
    fetch("https://api.hadith.sutanlab.id/books/muslim?range=1-300")
    .then(response => response.json())
    .then(information =>{
        let hadiths = information.data.hadiths;
        changehadith();
        next.addEventListener('click',()=>{
            hadithindex==299 ? hadithindex=0 :hadithindex++;
            changehadith()
        })
        prev.addEventListener('click',()=>{
            hadithindex==0 ? hadithindex=299 :hadithindex--;
            changehadith()
        })
        function changehadith () {
            HadithContainer.innerText  = hadiths[hadithindex].arab;
            number.innerText = ` ${hadithindex + 1}`
        }
    })
}
let right = document.querySelector('.right')
right.onmouseenter = function(){
    right.style.overflow="auto"
}
right.onmouseleave = function(){
    right.scrollTo({top:0 ,  behavior:"smooth"}),
    setTimeout(() => {
        right.style.overflow="hidden"
    }, 500);
}

let books = document.querySelector('.photos')
books.onmouseenter = function(){
    books.style.overflow="auto"
}
books.onmouseleave = function(){
    books.scrollTo({top:0 ,  behavior:"smooth"}),
    setTimeout(() => {
        books.style.overflow="hidden"
    }, 500);
}

let up = document.querySelector('.up')
up.onclick = function (){
    window.scrollTo({top:5 , behavior:"smooth"})
}

window.onscroll = function(){
    window.scrollY >=250 ? up.style.display = "block" :  up.style.display = "none"
}




let dark = document.querySelector (".dark")
let home = document.querySelector ("body")
dark.onclick = function (){
    home.style.background = 'white';
}

    // if (home.style.background === '#000') {
    //     dark.onclick = ()=> {
    //         home.style.background = '#fff';
    //     };
    // };

    // if (home.style.background === '#fff') {
    //     dark.onclick = ()=> {
    //         home.style.background = '#000';
    //     };
    // }

