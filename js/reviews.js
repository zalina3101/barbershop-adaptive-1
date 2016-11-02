var togglePrev = document.querySelector('.feedback-toggle--prev');
var toggleNext = document.querySelector('.feedback-toggle--next');

var feedbackTravis = document.querySelector('.feedback__item--travis');
var feedbackJohn = document.querySelector('.feedback__item--john');
var feedbackIvan = document.querySelector('.feedback__item--ivan');

togglePrev.addEventListener('click', function() {
  if (feedbackTravis.classList.contains('.feedback__item--active')) {
    feedbackTravis.classList.remove('.feedback__item--active');
    feedbackIvan.classList.add('.feedback__item--active');   
      } else if (feedbackIvan.classList.contains('.feedback__item--active')) {
        feedbackIvan.classList.remove('.feedback__item--active');
        feedbackJohn.classList.add('.feedback__item--active'); 
      } else if (feedbackJohn.classList.contains('.feedback__item--active')) {
        feedbackJohn.classList.remove('.feedback__item--active');
        feedbackTravis.classList.add('.feedback__item--active'); 
      }
    
});

