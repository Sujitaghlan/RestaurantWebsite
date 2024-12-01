const hamburgerIcon = document.querySelector('.hamburger-icon');
const logoItem = document.querySelector('#logo-item');
const navLink = document.querySelector('.nav-link');
const nav = document.querySelector('nav');
const logo = document.querySelector('.logo');
const linkTo = document.querySelectorAll('.link-to');
const home = document.querySelector('.home');

const mealItems = document.querySelectorAll('.meal-item');
const lines = document.querySelectorAll('.line');
const breakfast = document.querySelector('.breakfast');
const lunch = document.querySelector('.lunch');
const dinner = document.querySelector('.dinner');
const videoLink = document.querySelector('#videoLink');
const videoContainer = document.querySelector('#video-container');
const closeBtn = document.querySelector('#close');



navLink.style.maxHeight = "0px";
hamburgerIcon.addEventListener('click', () => {
    // Toggle display of the nav and nav-link
    if(navLink.style.maxHeight == "0px"){
        navLink.style.maxHeight = "300px";
        home.style.marginTop = "70px";
    }
    else{
        navLink.style.maxHeight = "0px";
        home.style.marginTop = "40px";
    }
});



mealItems.forEach((mealItem, index) => {
    mealItem.addEventListener('click', () => {
        // Remove 'active' class from all meal items
        mealItems.forEach(item => item.classList.remove('active'));
        // Hide all lines and meal sections
        lines.forEach(line => line.style.display = 'none');
        breakfast.classList.add('hide');
        lunch.classList.add('hide');
        dinner.classList.add('hide');

        // Add 'active' class to the clicked meal item
        mealItem.classList.add('active');
        lines[index].style.display = 'block';

        // Show the corresponding meal section based on the clicked item
        if (mealItem.classList.contains('breakfast-item')) {
            breakfast.classList.remove('hide');
        } else if (mealItem.classList.contains('lunch-item')) {
                lunch.classList.remove('hide');
        } else if (mealItem.classList.contains('dinner-item')) {
            dinner.classList.remove('hide');
        }
    });
});

let player;  // Declare a global variable for the player

// This function creates an <iframe> (and YouTube player) after the API code downloads.
function onYouTubeIframeAPIReady() {
    player = new YT.Player('youtube-video', {  // Replace 'youtube-video' with the ID of your iframe
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    // You can add additional setup here if needed
}

// Function to stop the video
function stopVideo() {
    if (player) {
        console.log("Stopping video");
        player.stopVideo();
    }
}
videoLink.addEventListener('click', () => {
    videoContainer.classList.remove('hide');
})

closeBtn.addEventListener('click', () => {
    stopVideo();
    videoContainer.classList.add('hide');
    
})

var swiper = new Swiper(".slider-wrapper", {
    grabCursor: true,
    spaceBetween: 20,
    loop: true,
    centeredSlides: true,
    autoplay: {
      delay: 8000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,

    },
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
    
    on: {
        slideChange: function () {
            // Remove the 'middle-slide' class from all slides
            document.querySelectorAll('.clients').forEach(slide => {
                slide.classList.remove('middle-slide');
            });
            
            // Calculate the middle slide index
            const slides = document.querySelectorAll('.swiper-slide');
            const middleIndex = Math.floor(slides.length / 2);
            
            // Add the 'middle-slide' class to the middle slide
            // Note: Swiper may have multiple middle slides due to looping
            slides[middleIndex].classList.add('middle-slide');
            

        },
        init: function () {
            // Ensure the middle slide is highlighted on initialization
            this.slideChange();
        }
    },
  
  });

 async function handleSubmit(event){
    event.preventDefault();

    const myForm = document.getElementById('myForm');
    const formData = new FormData(myForm);
    const data = Object.fromEntries(formData.entries());

    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      });
      
      const result = await response.json();
      console.log("Response:", result);
    alert("Table booked successfully!!!");

  }
  

