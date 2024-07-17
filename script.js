const mealItems = document.querySelectorAll('.meal-item');
const lines = document.querySelectorAll('.line');
const breakfast = document.querySelector('.breakfast');
const lunch = document.querySelector('.lunch');
const dinner = document.querySelector('.dinner');
const videoLink = document.querySelector('#videoLink');
const videoContainer = document.querySelector('#video-container');
const closeBtn = document.querySelector('#close');

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


videoLink.addEventListener('click', () => {
    videoContainer.classList.remove('hide');
})

closeBtn.addEventListener('click', () => {
    videoContainer.classList.add('hide');
})

