/*=========================================================
        APNA ONLINE SEVA
        SCRIPT.JS PART - 1

        Features:
        1. Website Load Message
        2. Sticky Header Effect
        3. Automatic Copyright Year
=========================================================*/


// ==========================================
// 1. WEBSITE LOAD EVENT
// ==========================================

window.addEventListener("load", function(){

    console.log("Apna Online Seva Website Loaded Successfully");

});




// ==========================================
// 2. STICKY HEADER EFFECT
// ==========================================

const header = document.querySelector("header");


window.addEventListener("scroll", function(){

    if(window.scrollY > 50){

        header.classList.add("sticky");

    }

    else{

        header.classList.remove("sticky");

    }

});




// ==========================================
// 3. AUTOMATIC YEAR UPDATE IN FOOTER
// ==========================================

const footerYear = document.querySelector("footer p:last-child");


if(footerYear){

    let currentYear = new Date().getFullYear();

    footerYear.innerHTML =
    `© ${currentYear} Apna Online Seva | All Rights Reserved.`;

}
/*=========================================================
        APNA ONLINE SEVA
        SCRIPT.JS PART - 2

        Features:
        1. Service Search
        2. Contact Form Validation
        3. Success Message
=========================================================*/



// ==========================================
// 1. SERVICE SEARCH FUNCTION
// ==========================================

const searchInput = document.querySelector(".search-box input");
const serviceCards = document.querySelectorAll(".service-card");


if(searchInput){

    searchInput.addEventListener("keyup", function(){

        let searchValue = searchInput.value.toLowerCase();


        serviceCards.forEach(function(card){

            let serviceName = 
            card.querySelector("h3").innerText.toLowerCase();


            if(serviceName.includes(searchValue)){

                card.style.display = "block";

            }

            else{

                card.style.display = "none";

            }

        });


    });

}




// ==========================================
// 2. CONTACT FORM VALIDATION
// ==========================================

// ==========================================
// 2. CONTACT FORM SUBMISSION WITH EMAIL
// ==========================================
const contactForm = document.querySelector(".contact form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevents page reload

        const formData = new FormData(contactForm);
        const submitBtn = contactForm.querySelector("button[type='submit']");
        
        if(submitBtn) {
            submitBtn.innerText = "Sending...";
            submitBtn.disabled = true;
        }

        // Send data directly to Web3Forms API
        fetch("https://web3forms.com", {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Thank you! Your message has been sent successfully to Ankit.");
                contactForm.reset(); // Clear form inputs
            } else {
                alert("Something went wrong. Please try again.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Network error. Please check your connection.");
        })
        .finally(() => {
            if(submitBtn) {
                submitBtn.innerText = "Send Message";
                submitBtn.disabled = false;
            }
        });
    });
}



/*=========================================================
        APNA ONLINE SEVA
        SCRIPT.JS PART - 3

        Features:
        1. Mobile Menu Toggle
        2. Scroll To Top Button
        3. Scroll Animation
        4. Dark Mode Toggle
=========================================================*/



// ==========================================
// 1. MOBILE MENU TOGGLE
// ==========================================

// Agar future me hamburger button add karenge
// to ye code uske liye ready rahega

// ==========================================
// 1. MOBILE MENU TOGGLE (UPDATED WITH CROSS BUTTON)
// ==========================================

const mobileMenu = document.getElementById('mobile-menu');
const navMenuId = document.getElementById('nav-menu');
const barIcon = document.querySelector('.bar-icon');
const closeIcon = document.querySelector('.close-icon');

if (mobileMenu && navMenuId) {
    mobileMenu.addEventListener('click', function() {
        // menu on/off
        navMenuId.classList.toggle('active');
        
        // for cross button
        if (navMenuId.classList.contains('active')) {
            barIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        } else {
            barIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        }
    });

    // hide menu for click
    const navLinks = navMenuId.querySelectorAll('a');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            navMenuId.classList.remove('active');
            barIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        });
    });
}




// ==========================================
// 2. SCROLL TO TOP BUTTON
// ==========================================


const scrollBtn = document.createElement("button");


scrollBtn.innerHTML = "↑";


scrollBtn.classList.add("scroll-top");


document.body.appendChild(scrollBtn);



window.addEventListener("scroll", function(){


    if(window.scrollY > 400){

        scrollBtn.style.display = "flex";

    }

    else{

        scrollBtn.style.display = "none";

    }


});



scrollBtn.addEventListener("click", function(){


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});




// ==========================================
// 3. SCROLL ANIMATION
// ==========================================


const animatedItems = document.querySelectorAll(
    ".service-card, .why-card, .process-box, .testimonial-card"
);



window.addEventListener("scroll", function(){


    animatedItems.forEach(function(item){


        let position = item.getBoundingClientRect().top;


        let screenHeight = window.innerHeight;



        if(position < screenHeight - 100){


            item.style.opacity = "1";

            item.style.transform = "translateY(0)";


        }


    });


});




// ==========================================
// 4. DARK MODE TOGGLE
// ==========================================


const darkBtn = document.createElement("button");


darkBtn.innerHTML = "🌙";


darkBtn.classList.add("dark-mode-btn");


document.body.appendChild(darkBtn);



darkBtn.addEventListener("click", function(){


    document.body.classList.toggle("dark-mode");


});

