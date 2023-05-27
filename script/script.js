document.addEventListener('DOMContentLoaded', function() {
    var dropdownItems = document.querySelectorAll('.has-dropdown');
    dropdownItems.forEach(function(item) {
      var link = item.querySelector('a'); // Get the link element inside the dropdown item
      var submenu = item.querySelector('.sub-menu'); // Get the sub-menu element
  
      item.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        this.classList.toggle('active');
        submenu.classList.toggle('active'); // Toggle the "active" class on the sub-menu
  
        // Navigate to the URL when the link is clicked
        link.addEventListener('click', function(e) {
          e.stopPropagation(); // Prevent the click event from bubbling up to the parent item
          window.location.href = this.href; // Navigate to the link's URL
        });

        var subMenuLinks = submenu.querySelectorAll('a');
        subMenuLinks.forEach(function(subLink) {
          subLink.addEventListener('click', function(e) {
            e.preventDefault(); // Prevent the default link behavior
            window.location.href = this.href; // Navigate to the link's URL
          });
        });
        
      });
    });
  });
  