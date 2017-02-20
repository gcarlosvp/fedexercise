/**
 * @file
 * A jQuery file to make the menu more mobile on small screens.
 */

(function ($, Drupal, window, document, undefined) {
Drupal.behaviors.my_custom_behavior = {
  attach: function(context, settings) {

    // Begin basic mobile menu support here
    // Set this 481 to the number of pixels you want for when the mobile menu
    // becomes a desktop menu
    if ($(window).width() < 737) {
      //Add your jQuery for mobile menu on small screens here

      // Hide the main menu items for mobile views initially
      $('#block-system-main-menu ul').hide();
        
      $( "#block-system-main-menu h2" ).replaceWith( '<button type="button" class="btn btn-default" aria-label="Menu Icon"><span class="glyphicon glyphicon-menu-hamburger" aria-hidden="true"></span></button>' );

      // Remove the element-invisible class for the #block-system-main-menu title on
      // small screens so we can use the menu title as our trigger
      // Add an "unclicked" class to the trigger (handy for theming)
      $('#block-system-main-menu button').removeClass('element-invisible').addClass('menu-trigger-unclicked');

      // Toggle list on/off when title is clicked
      $('#block-system-main-menu button').click(function() {
        // When clicked, add a "clicked" class to the trigger (handy for theming)
        // and remove the "unclicked" class and vice versa.
        $('#block-system-main-menu button').toggleClass('menu-trigger-unclicked menu-trigger-clicked');
        // Slide the menu in to/out of view when trigger is clicked
        $('#block-system-main-menu ul').slideToggle();
        // Set each menu item to 100% so they are no longer set side-by-side
        $('#navigation .links li').css('width','100%');
      });

      // Make the cursor a pointer when hovered
      $('#block-system-main-menu button').hover(function() {
        $(this).css('cursor','pointer');
      });
    }
  }
};

})(jQuery, Drupal, this, this.document);
