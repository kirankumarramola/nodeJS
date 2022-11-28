//events
/*var fs = require('fs');
var rs = fs.createReadStream('./mytextfile1.txt');
rs.on('open',function(){
    console.log("The File is Open");
});
*/
//event modulus
var events = require('events');
var eventEmitter = new events.EventEmitter();

var myEventHandler = function () {
  console.log('I hear a scream!');
}

eventEmitter.on('scream', myEventHandler);
eventEmitter.on('click', ()=>console.log("Click"));

eventEmitter.emit('click');
eventEmitter.emit('scream');