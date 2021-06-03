
const app = {

  burger: document.querySelector('.burger_menu'),

  init: function() {

    app.burger.addEventListener('click', app.handleBurgerClick);
  },

  handleBurgerClick: function() {

    app.burger.classList.toggle('active');
  }
}

document.addEventListener('DOMContentLoaded', app.init);