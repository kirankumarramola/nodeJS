var express = require('express');
var upload = require('express-fileupload');

var app = express();
app.use(upload());

app.get('/',(req,res) => {
    res.sendFile(__dirname + "/upload.html");
});

app.post('/',(req,res) => {
    if (req.files) {
        console.log(req.files);
        var file = req.files.file;
        var filename = file.name;
        console.log(filename);

        file.mv('E:/kiran/Uploads/' + filename ,(err) => {
            if (err) {
                res.send(err)
            } else {
                res.send("File Uploaded")
            }
        });
    }
});
app.listen(5000,() => {
    console.log("Listening on port 5000")
})