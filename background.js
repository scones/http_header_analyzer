
window.browser = (function () {
  return window.msBrowser || window.browser || window.chrome;
})();

window.browser.webRequest.onHeadersReceived.addListener(
  function(info) {
    localStorage.response_headers = JSON.stringify(info.responseHeaders);
//    console.log("onHeadersReceived: \n");
//    console.log(info);
  },
  {
    urls: [
      'http://*/*',
      'https://*/*'
    ],
    types: ['main_frame']
  },
  ['responseHeaders']
);


window.browser.webRequest.onSendHeaders.addListener(
  function(info) {
    localStorage.request_headers = JSON.stringify(info.requestHeaders);
//    console.log("onSendHeaders: \n");
//    console.log(info);
  },
  {
    urls: [
      'http://*/*',
      'https://*/*'
    ],
    types: ['main_frame']
  },
  ['requestHeaders']
);

