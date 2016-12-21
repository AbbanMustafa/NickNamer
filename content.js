function getword(info,tab) {
  //console.log("Word " + info.selectionText + " was clicked.");
  myStorage = localStorage;
  var origin = info.selectionText;
  localStorage.setItem("origin", info.selectionText);
  chrome.tabs.create({
    url: "http://www.google.com/search?q=" + origin,
  });
  chrome.tabs.create({
              url: chrome.extension.getURL('dialog.html'),
              active: false
          }, function(tab) {
              // After the tab has been created, open a window to inject the tab
              chrome.windows.create({
                  tabId: tab.id,
                  type: 'popup',
                  focused: true,
                  height: 25,
                  width: 220,
                  left:625,
                  top:400,
                  // incognito, top, left, ...
              });
              //chrome.windows.remove(tab.id);
          });

          chrome.tabs.create({
            url: "http://www.google.com/search?q=" + newtext,
          });
}
chrome.contextMenus.create({
  title: "Give %s a nickname",
  contexts:["selection"],
  onclick: getword,
//  var origi = ["selection"],
});
