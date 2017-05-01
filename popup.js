

function dump_headers(header_name) {
  var node = window.document.getElementById(header_name);

  var headers = JSON.parse(localStorage[header_name]);
  var result_string = '';
  for (var i = 0; i < headers.length; ++i) {
    result_string += '<li><b>' + headers[i]['name'] + '</b>: ' + headers[i]['value'] + '</li>';
  }
  node.innerHTML = result_string;
}


function init() {
  dump_headers('request_headers');
  dump_headers('response_headers');
}
document.addEventListener('DOMContentLoaded', init);

