let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length - 1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);
let circles = document.querySelectorAll(".circle")
circles.forEach(ele => {
    let dots = ele.getAttribute("data-dots");
    let marked = ele.getAttribute("data-percent");
    let percent = Math.floor(dots * marked / 100);
    let points = "";
    let rotate = 360 / dots;

    for(let i=0; i<dots; i++){
        points +=`<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`
       
    }
    ele.innerHTML = points
    let pointMarked = ele.querySelectorAll(".points")
    for(let i=0; i<percent; i++){
        pointMarked[i].classList.add("marked")
    }
     
})

let menu = document.querySelectorAll("header ul li a");
let section = document.querySelectorAll("section")

function activeMenu(){
    let len = section.length
    while (--len &&  window.scrollY + 90 < section[len].offsetTop) {}
    menu.forEach(sec => sec.classList.remove("active"))
    menu[len].classList.add("active")
}
activeMenu()
window.addEventListener("scroll",activeMenu)

let observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    })
})
let scrollScale = document.querySelectorAll(".scroll-scale")
scrollScale.forEach((el)=>observer.observe(el))
let scrollBottom = document.querySelectorAll(".scroll-bottom")
scrollBottom.forEach((el)=>observer.observe(el))
let scrollTop = document.querySelectorAll(".scroll-top")
scrollTop.forEach((el)=>observer.observe(el))
