const questions = document.querySelectorAll('.faqsQuestion');


questions.forEach(question => {
    question.addEventListener('click', ()=> {
     const answer = question.nextElementSibling;  
     const item = question.parentElement;  
     
     item.classList.toggle('active');

    });
    });