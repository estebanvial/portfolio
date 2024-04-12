
// Fonction pour vérifier la visibilité d'un élément
function checkVisibility(elementId, animationClass) {
    // Obtient la position verticale du bord supérieur de l'élément par rapport au document
    let top_of_element = $(elementId).offset().top;
    // Calcule la position verticale du bord inférieur de l'écran visible
    let bottom_of_screen = $(window).scrollTop() + $(window).innerHeight();

    // Vérifie si l'élément est actuellement visible à l'écran
    if (bottom_of_screen > top_of_element) {
        // Ajoute la classe d'animation pour déclencher l'animation
        $(elementId).addClass(animationClass);
    }
}

// Attache un gestionnaire d'événements à l'événement de défilement de la fenêtre
$(window).scroll(function() {
    // Vérifie la visibilité du paragraphe 1
    checkVisibility("#paragraphe1", "animationparagraphe1");
    // Vérifie la visibilité du paragraphe 2
    checkVisibility("#paragraphe2", "animationparagraphe2");
    // Vérifie la visibilité du paragraphe 2
    checkVisibility("#bouttonContact", "animationbouttonContact");
    // Vérifie la visibilité du paragraphe 2
    checkVisibility("#entreprise1", "animationentreprise1");
    // Vérifie la visibilité du paragraphe 2
    checkVisibility("#entreprise2", "animationentreprise2");
    // Vérifie la visibilité du paragraphe 2
    checkVisibility("#entreprise3", "animationentreprise3");
});




jQuery(document).ready(function($){
  
    $('a.scroll-link').click(function(e){
      e.preventDefault();
      $id = $(this).attr('href');
      $('body,html').animate({
        scrollTop: $($id).offset().top -20
      }, 750);
    });
    
  });