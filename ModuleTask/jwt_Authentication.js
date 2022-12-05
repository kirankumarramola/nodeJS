
const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
app.get('/api',(req,res)=>{
    res.json({
        message:"hello"
    })

})
app.post('/api/posts',verifyToken,(req,res)=>{
    jwt.verify(req.token,'secreey' ,(err,authData) =>{
        if (err) {
            res.sendStatus(403)
        } else{
            res.json({
                message : "Successfully Authorized",
                authData,
            });
        }
    });
});

app.post('/api/login',(req,res)=>{
    const user = {
        id:1,
        username:"kiran",
        email:"kiran@gmail.com"
    };

    jwt.sign({user : user},'secreey', (err,token) =>{
        res.json({
            token,
        });
    });
});

function verifyToken(req,res,next){
    const bearerheader = req.headers['authorization'];
    if (typeof(bearerheader) !== 'undefined') {
        const bearertoken = bearerheader.split(' ')[1];
        req.token = bearertoken;
        next();
    } else {
        res.sendStatus(403);
    }
}


app.listen(3000,(req,res)=>{
    console.log("listening on port 3000..");
})

