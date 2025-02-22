const dynamicText=document.querySelector("h3 span");
const words = ["Frontend Designer","Web Designer","Content Creator",
  "Developer Using AI","Backend Developer"]; 

let wordIndex = 0;
let charIndex = 1;
let isDeleting = false; 

const typeEffect = () => {
  const currentWord = words[wordIndex];
  const currentChar = currentWord.substring(0,charIndex);
  dynamicText.textContent =currentChar;
  dynamicText.classList.add("stop-blinking");
  
  if(!isDeleting && charIndex < currentWord.length) {
    charIndex++;
    setTimeout(typeEffect,200);
  } else if(isDeleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect,100);
  } else {
    isDeleting = !isDeleting;
    wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
    dynamicText.classList.remove("stop-blinking");
    setTimeout(typeEffect,1200);
  }
}  
typeEffect();

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelector('section');
let navlink = document.querySelector('header nav a');

window.onscroll = () => {
  sections.forEach(sec => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute('id');

    if(top >= offset && top < offset + height){
      navLinks.forEach(links => {
        links.classList.remove('active');
        document.querySelector('header nav a [href*=' + id + ' ]').classList.add
        ('active')
      })
    }
  })
}


menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toogle('active');
}

//------------------- nav bar mobile view process -----------------------//
 
const form = document.querySelector("form");
const FullName = document.getElementById("name");
const EmailAddress = document.getElementById("Email");
const PhoneNumber = document.getElementById("Phone");
const Subject = document.getElementById("Subject");
const YourMessage = document.getElementById("Your Message");

function sendEmail() {
  Email.send({
    Host : "smtp.mailendo.com",
    Username : "username",
    Password : "password",
    To : 'them@website.com',
    From : "you@isp.com",
    Subject : "This is the subject",
    Body : "And this is the body"
  }).then(
    message => alert(message)
  );
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  sendEmail();
});

//-------------------contact option-----------------------------------//
