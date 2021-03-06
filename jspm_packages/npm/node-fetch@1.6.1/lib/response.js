/* */ 
var http = require('http');
var Headers = require('./headers');
var Body = require('./body');
module.exports = Response;
function Response(body, opts) {
  opts = opts || {};
  this.url = opts.url;
  this.status = opts.status || 200;
  this.statusText = opts.statusText || http.STATUS_CODES[this.status];
  this.headers = new Headers(opts.headers);
  this.ok = this.status >= 200 && this.status < 300;
  Body.call(this, body, opts);
}
Response.prototype = Object.create(Body.prototype);
Response.prototype.clone = function() {
  return new Response(this._clone(this), {
    url: this.url,
    status: this.status,
    statusText: this.statusText,
    headers: this.headers,
    ok: this.ok
  });
};
