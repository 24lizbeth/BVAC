const questions = document.querySelectorAll('.faqsQuestion');


questions.forEach(question => {
    question.addEventListener('click', ()=> {
     const answer = question.nextElementSibling;  
     const item = question.parentElement;  
     
     item.classList.toggle('active');

    });
    });



const messages = [
    '"Liam and his team took the time to evalualte our needs for our new home and we are loving and enjoying every second of it during this hot summer!"',
   '"The install team did great and cleaned up after themselves"'
];

const bannerMessage = document.getElementById("bannerMessage");

let currentMessage = 0;


    

    function rotateMessage() {
        bannerMessage.classList.add("fade-out");
    

    setTimeout(() => {
        currentMessage = (currentMessage +1) % messages.length;

        bannerMessage.textContent = messages[currentMessage];

        bannerMessage.classList.remove("fade-out");

    }, 500 );
}

setInterval(rotateMessage, 4000);


const names = [
    "John L.",
    "Arron S." 
];

const bannerName = document.getElementById("bannerName");

let currentName = 0;

bannerName.textContent = names[currentName];
    

    function rotateNames() {
        bannerName.classList.add("fade-out");
    

    setTimeout(() => {
        currentName = (currentName +1) % names.length;

        bannerName.textContent = names[currentName];

        bannerName.classList.remove("fade-out");

    }, 500 );
}

setInterval(rotateNames, 4000);