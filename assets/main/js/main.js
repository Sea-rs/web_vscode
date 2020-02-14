window.addEventListener('DOMContentLoaded', function() {
  //Click event when clicked at list item in side area.
  (function() {
    let allListLabel = document.querySelectorAll('.home-List_Label');
    let allListNamespace = document.querySelectorAll('.home-List_NameSpace');
    let allListItem = document.querySelectorAll('.home-List_Item');

    let homeListLabelOpen = 'home-List_Label-open';
    let homeListLabelClose = 'home-List_Label-close';
    let homeListNameSpaceOpen = 'home-List_NameSpace-open';
    let homeListNameSpaceClose = 'home-List_NameSpace-close';
    let swClosed = 'sw-closed';

    allListLabel.forEach(function(listItem) {
      listItem.addEventListener('click', function(self) {
        let isOpened = self.target.classList.contains(homeListLabelOpen);

        if(isOpened) {
          self.target.classList.remove(homeListLabelOpen);
          self.target.classList.add(homeListLabelClose);
          self.target.nextElementSibling.classList.add(swClosed);

        } else {
          self.target.classList.add(homeListLabelOpen);
          self.target.classList.remove(homeListLabelClose);
          self.target.nextElementSibling.classList.remove(swClosed);

        }
      });
    });

    allListNamespace.forEach(function(listItem) {
      listItem.addEventListener('click', function(self) {
        let isOpened = self.target.classList.contains(homeListNameSpaceOpen);

        if(isOpened) {
          self.target.classList.remove(homeListNameSpaceOpen);
          self.target.classList.add(homeListNameSpaceClose);
          self.target.nextElementSibling.classList.add(swClosed);

        } else {
          self.target.classList.add(homeListNameSpaceOpen);
          self.target.classList.remove(homeListNameSpaceClose);
          self.target.nextElementSibling.classList.remove(swClosed);

        }
      });
    });

    
  })();
});