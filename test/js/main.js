// Accordion
let panelItem = document.querySelectorAll('.header__content-footer-title'),
  bodyItem = document.querySelectorAll('.questions__text');

let activePanel;
panelItem.forEach(function(item) {
  item.addEventListener('click', function() {

    this.classList.add('active');
    this.nextElementSibling.classList.add('active');

    if (activePanel) {
      activePanel.classList.remove('active');
      activePanel.nextElementSibling.classList.remove('active');
    }

    activePanel = (activePanel === this) ? 0 : this;
  });
});

// Form
const formInputName = document.querySelector('#header__content-footer-input');
const formClose = document.querySelector('.header__content-footer-form-close');

formClose.addEventListener('click', () => {
  
  formInputName.value = '';
  
});