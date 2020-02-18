window.addEventListener('load', function() {
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

  //Fetch contents by ajax.
  (function() {
    var jsHomeMain = document.getElementById('js-home-Main');
    var contentsID = 'home-content';

    (function() {
      let xhrObj = new XMLHttpRequest();

      xhrObj.open('GET', './assets/component/article/html/header.html');
      xhrObj.responseType = 'document';
      xhrObj.send();

      xhrObj.onreadystatechange = function () {
        if (xhrObj.status !== 200) {
          return;
        }

        if (xhrObj.readyState === 4) {
          if (document.getElementById(contentsID) !== null) {
            jsHomeMain.replaceChild(xhrObj.response.getElementById(contentsID), document.getElementById(contentsID));

          } else {
            jsHomeMain.appendChild(xhrObj.response.getElementById(contentsID));
          }
        }
      }
    })();

    document.getElementById('js-Component_SW_Header').addEventListener('click', function() {
      let xhrObj = new XMLHttpRequest();

      xhrObj.open('GET', './assets/component/article/html/header.html');
      xhrObj.responseType = 'document';
      xhrObj.send();

      xhrObj.onreadystatechange = function () {
        if (xhrObj.status !== 200) {
          return;
        }

        if (xhrObj.readyState === 4) {
          if (document.getElementById(contentsID) !== null) {
            jsHomeMain.replaceChild(xhrObj.response.getElementById(contentsID), document.getElementById(contentsID));

          } else {
            jsHomeMain.appendChild(xhrObj.response.getElementById(contentsID));
          }
        }
      }
    });

    document.getElementById('js-Component_Art_Header').addEventListener('click', function() {
      let xhrObj = new XMLHttpRequest();

      xhrObj.open('GET', './assets/component/sitewide/html/header.html');
      xhrObj.responseType = 'document';
      xhrObj.send();

      xhrObj.onreadystatechange = function () {
        if (xhrObj.status !== 200) {
          return;
        }

        if (xhrObj.readyState === 4) {
          if (document.getElementById(contentsID) !== null) {
            jsHomeMain.replaceChild(xhrObj.response.getElementById(contentsID), document.getElementById(contentsID));

          } else {
            jsHomeMain.appendChild(xhrObj.response.getElementById(contentsID));
          }
        }
      }
    });
  })();
});