document.addEventListener('DOMContentLoaded', function () {
    var dropdownItems = document.querySelectorAll('.has-dropdown');
    dropdownItems.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault(); // Prevent the default link behavior
        this.classList.toggle('active');
      });
    });
  });
  