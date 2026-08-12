/* ==========================================
   Printnet Marketplace
   marketplace.js
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    initializeMarketplaceSearch();

    initializeFilters();

    initializeSellerForm();

    initializeContactButtons();

});


/* ==========================================
   SEARCH LISTINGS
========================================== */

function initializeMarketplaceSearch(){

    const searchInput =
        document.getElementById("searchMarketplace");

    const listings =
        document.querySelectorAll(".listing-card");


    if(!searchInput) return;


    searchInput.addEventListener("keyup",()=>{

        const value =
            searchInput.value.toLowerCase();


        listings.forEach(card=>{

            const text =
                card.innerText.toLowerCase();


            if(text.includes(value)){

                card.style.display="block";

            }
            else{

                card.style.display="none";

            }

        });


    });


}


/* ==========================================
   BRAND FILTERS
========================================== */

function initializeFilters(){

    const buttons =
        document.querySelectorAll(".filter-btn");


    const listings =
        document.querySelectorAll(".listing-card");


    buttons.forEach(button=>{


        button.addEventListener("click",()=>{


            buttons.forEach(btn=>{

                btn.classList.remove("active");

            });


            button.classList.add("active");


            const filter =
                button.dataset.filter;



            listings.forEach(card=>{


                const brand =
                    card.dataset.brand;



                if(
                    filter==="all" ||
                    brand===filter
                ){

                    card.style.display="block";

                }
                else{

                    card.style.display="none";

                }


            });


        });


    });


}


/* ==========================================
   SELL PRINTER FORM
========================================== */

function initializeSellerForm(){


    const form =
        document.getElementById("sellPrinterForm");


    if(!form) return;



    form.addEventListener("submit",(event)=>{


        event.preventDefault();



        const listing={


            name:
            document.getElementById("sellerName").value,


            brand:
            document.getElementById("printerBrand").value,


            model:
            document.getElementById("printerModel").value,


            condition:
            document.getElementById("condition").value,


            price:
            document.getElementById("price").value,


            location:
            document.getElementById("location").value,


            description:
            document.getElementById("description").value


        };



        saveListing(listing);



        alert(
            "Your printer listing has been submitted successfully!"
        );



        form.reset();


    });


}


/* ==========================================
   SAVE SELLER LISTING
========================================== */

function saveListing(listing){


    let listings =
        JSON.parse(
            localStorage.getItem("printerListings")
        ) || [];



    listings.push(listing);



    localStorage.setItem(
        "printerListings",
        JSON.stringify(listings)
    );


}


/* ==========================================
   CONTACT SELLER
========================================== */

function initializeContactButtons(){


    const buttons =
        document.querySelectorAll(".contact-seller");



    buttons.forEach(button=>{


        button.addEventListener("click",()=>{


            alert(
                "Seller contact details will be shared after login verification."
            );


        });


    });


}


/* ==========================================
   LOAD USER LISTINGS
========================================== */

function loadSavedListings(){


    const listings =
        JSON.parse(
            localStorage.getItem("printerListings")
        ) || [];



    console.log(
        "Saved Marketplace Listings:",
        listings
    );


}


loadSavedListings();


/* ==========================================
   END
========================================== */