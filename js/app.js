
const app = {

  /* récupération des éléments du DOM */
  content: document.getElementById('hamburger-content'),
  sidebarBody: document.getElementById('hamburger-sidebar-body'),
  button: document.getElementById('hamburger-button'),
  overlay: document.getElementById('hamburger-overlay'),
  activatedClass: 'hamburger-activated',

  init: function() {
    
    /* on intègre le contenu de hamburger-content dans la sidebar-body */
    app.sidebarBody.innerHTML = app.content.innerHTML;

    app.button.addEventListener('click', app.handleButtonMenuEvent);

    app.overlay.addEventListener('click', app.handleClickOverlay);

    app.button.addEventListener('keydown', app.handleClickButton);
  },

  handleButtonMenuEvent: function(evt) {

    /* annule les comportements par défaut */
    evt.preventDefault();

    /* console.log(this.parentNode); */
    this.parentNode.classList.add(app.activatedClass);

  },

  handleClickOverlay: function(evt) {

    /* annule les comportements par défaut */
    evt.preventDefault();

    /* console.log(this.parentNode); */
    this.parentNode.classList.remove(app.activatedClass);

  },

  handleClickButton: function(evt) {

    if(this.parentNode.classList.contains(app.activatedClass)) {

      /* si pas appui long et touche échap */
      if(evt.repeat === false && evt.which === 27) {

        this.parentNode.classList.remove(app.activatedClass);
      }
    }

  }

}

document.addEventListener('DOMContentLoaded', app.init);