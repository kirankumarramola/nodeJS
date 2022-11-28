var http = require('http');
var fs = require('fs');

// readFile() - opens or reads files 
http.createServer((req,res)=>{
    fs.readFile('Demo.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);

/* appendFile() - appends specified content to a file,
 if the file does not exist it will create a new file
fs.appendFile('myfile1.txt','Hello... this is Kiran', function(err){
    if(err) throw err;
    console.log('Saved');
});
*/

/* open() - w for writing, opens for writing
fs.open('myfile2.txt', 'w', function (err, file) {
    if (err) throw err;
    console.log('Saved!');
});
*/

/* writeFile() - it will create a file if doesn't exists and adds content
fs.writeFile('myfile3.txt','Hey! , this is text file',function(err){
    if(err) console.log(err);
    console.log("Saved");
});
*/

/* appendFile() - to add or append the content
fs.appendFile('myfile1.txt','. /n How you doing?',(err)=>{
    if(err) throw err;
    console.log('Updated');
});
*/

/* writeFile() - it will replace the content with the given content 
fs.writeFile('myfile1.txt',"HELLO USER!!!",(err)=>{
    if(err) throw err;
    console.log("Replaced");
});
*/

/* unlink() - used to delete the file
fs.unlink('myfile3.txt', function(err){
    //if(err) throw err; optional
    console.log("File Deleted");
});
*/

/* rename() - used to rename the files
fs.rename('myfile1.txt','mytextfile1.txt',(err)=>{
    console.log("File Renamed");
});
*/