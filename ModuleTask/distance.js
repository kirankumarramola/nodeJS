var latlng = require('latitude-longitude');
var center = latlng.getCenter([[40.7, 75.6], [41.1, 74.05], [40.742256, 74.006344], [40.691805, 73.908089]])
var dist = latlng.getDistance([18.7526603, 73.4054072], [17.502037, 78.5394064])

console.log(center);
console.log(dist);
