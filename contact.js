/* ==========================================
   Printnet Contact Page
   contact.js
========================================== */


document.addEventListener("DOMContentLoaded",()=>{


    initializeContactForm();


    initializeFAQ();


});





/* ==========================================
   CONTACT FORM
========================================== */


function initializeContactForm(){


    const form =
        document.getElementById("contactForm");



    if(!form) return;



    form.addEventListener("submit",(event)=>{


        event.preventDefault();



        const name =
            document.getElementById("name").value.trim();


        const email =
            document.getElementById("email").value.trim();


        const subject =
            document.getElementById("subject").value.trim();


        const message =
            document.getElementById("message").value.trim();





        if(
            name === "" ||
            email === "" ||
            subject === "" ||
            message === ""
        ){

            alert(
                "Please fill all fields."
            );

            return;

        }





        const contactMessage = {


            name:name,


            email:email,


            subject:subject,


            message:message,


            date:new Date().toLocaleString()


        };





        saveContactMessage(contactMessage);





        alert(

            "Thank you for contacting Printnet! Your message has been sent."

        );





        form.reset();



    });



}





/* ==========================================
   SAVE CONTACT MESSAGE
========================================== */


function saveContactMessage(data){



    let messages =

        JSON.parse(

            localStorage.getItem("contactMessages")

        ) || [];





    messages.push(data);





    localStorage.setItem(

        "contactMessages",

        JSON.stringify(messages)

    );



}






/* ==========================================
   EMAIL VALIDATION
========================================== */


function validateEmail(email){



    const pattern =

    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;





    return pattern.test(email);



}






/* ==========================================
   FAQ INTERACTION
========================================== */


function initializeFAQ(){



    const faqCards =

        document.querySelectorAll(".faq-card");





    faqCards.forEach(card=>{



        const answer =

            card.querySelector("p");





        if(!answer) return;





        answer.style.display="none";





        card.addEventListener("click",()=>{



            if(answer.style.display==="none"){



                answer.style.display="block";



            }

            else{



                answer.style.display="none";



            }



        });



    });



}






/* ==========================================
   SOCIAL BUTTON EFFECT
========================================== */


document.querySelectorAll(".social-links a")

.forEach(link=>{



    link.addEventListener("mouseenter",()=>{


        link.style.transform="scale(1.1)";


    });





    link.addEventListener("mouseleave",()=>{


        link.style.transform="scale(1)";


    });



});






/* ==========================================
   PAGE LOADED
========================================== */


console.log(

    "Printnet Contact System Loaded Successfully."

);