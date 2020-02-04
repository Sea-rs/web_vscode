window.addEventListener('DOMContentLoaded', function() {
  //Click event when clicked at list item in side area.
  (function() {
    let allListLabel = document.querySelectorAll('.home-List_Label');
    let allListNamespace = document.querySelectorAll('.home-List_NameSpace');
    let allListItem = document.querySelectorAll('.home-List_Item');
    let isOpened;

    allListLabel.forEach(function(listItem, index) {
      listItem.addEventListener('click', function(self) {
        isOpened = self.target.classList.contains('home-List_Label-open');

        if(isOpened) {
          self.target.classList.remove('home-List_Label-open');
          self.target.classList.add('home-List_Label-close');
          allListNamespace[index].classList.add('sw-closed');
        } else {
          self.target.classList.add('home-List_Label-open');
          self.target.classList.remove('home-List_Label-close');
          allListNamespace[index].classList.remove('sw-closed');
        }
      });
    });

    allListNamespace.forEach(function(listItem, index) {
      listItem.addEventListener('click', function(self) {
        isOpened = self.target.classList.contains('home-List_NameSpace-open');

        if(isOpened) {
          self.target.classList.remove('home-List_NameSpace-open');
          self.target.classList.add('home-List_NameSpace-close');
          allListItem[index].classList.add('sw-closed');
        } else {
          self.target.classList.add('home-List_NameSpace-open');
          self.target.classList.remove('home-List_NameSpace-close');
          allListItem[index].classList.remove('sw-closed');
        }
      });
    });
  })();
});