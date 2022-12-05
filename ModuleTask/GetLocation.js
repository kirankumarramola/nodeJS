var geoip = require('geoip-lite');
var ip = "14.143.13.114";
var geo = geoip.lookup(ip);

console.log(geo);