// Sticky Navbar
window.addEventListener("scroll", function() {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.screenY > 0);
})

// Hamburger Menu
const hamburgerWrapper = document.querySelector(".hamburger-wrapper");
const menuList = document.querySelector(".nav-ul");

hamburgerWrapper.addEventListener("click", () => {
    hamburgerWrapper.classList.toggle("active");
    menuList.classList.toggle("showmenu");
});

// Change Text
let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length-1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i) => {
        setTimeout(() => {
            letter.className = "letter out";
        },i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter,i)=> {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in";
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText, 3000);

// About Section Tab
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// Contact Form Submission
const scriptURL = 'https://script.google.com/macros/s/AKfycbz_kKmcXkzUmwCh9cul5ObmUNb4NeY6wrEkwAZ4uP_azQjOB1q0WZnbeKmQffc8dtBprQ/exec'
        const form = document.forms['submit-to-google-sheet']
        const msg = document.getElementById("msg")
      
        form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML = "Message Sent Successfully"
                setTimeout(function() {
                    msg.innerHTML = ""
                }, 4000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        });
