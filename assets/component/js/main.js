window.addEventListener('DOMContentLoaded', function() {
  //Click event when clicked at list item in side area.
  (function() {
    let allListLabel = document.querySelectorAll('.home-List_Label');
    let allListNamespace = document.querySelectorAll('.home-List_NameSpace');

    allListLabel.forEach(function(listItem) {
      console.log(listItem);
    });

    allListNamespace.forEach(function(listItem) {
      console.log(listItem);
    });
  })();
});