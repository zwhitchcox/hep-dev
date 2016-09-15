/* */ 
var basePropertyOf = require('./_basePropertyOf');
var htmlUnescapes = {
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&quot;': '"',
  '&#39;': "'",
  '&#96;': '`'
};
var unescapeHtmlChar = basePropertyOf(htmlUnescapes);
module.exports = unescapeHtmlChar;
