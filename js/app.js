
const app = {

  burger: document.querySelector('.burger'),

  init: function() {

    app.burger.addEventListener('click', app.handleEventBurgerNav);
  },

  handleEventBurgerNav: function(evt) {

    /* quand on clique sur mon élément ca lui met la classe active 
    si on reclique ca la retire c'est le principe du toggle */
    app.burger.classList.toggle('active');
  }

}

document.addEventListener('DOMContentLoaded', app.init);