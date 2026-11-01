const heroBtn = document.getElementById("heroBtn");
const responsiveForm = document.getElementById("responsiveForm");


console.log("OurWorkScript.js is running");




console.log("CTA:", heroBtn);
console.log("Form:", responsiveForm);
if (heroBtn && responsiveForm) {

    heroBtn.addEventListener("click", function() {

        console.log("CTA button clicked!");

        responsiveForm.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

}


const ctaBtnPhone = document.getElementById("ctaBtnPhone");
ctaBtnPhone.addEventListener('click',()=> {
    const phoneNumber = '+19728009993';
    window.location.href = 'tel:${phoneNumber}';
});

const ctaBtnSchedule = document.getElementById('ctaBtnSchedule');
ctaBtnSchedule.addEventListener('click',()=> {
    window.location.href = 'submissions.html'
});


const ctaBtnServices = document.getElementById('ctaBtnServices');
ctaBtnServices.addEventListener('click',()=> {
    window.location.href = 'submissions.html'
});