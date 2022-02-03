const express = require('express');
const { request } = require('http');
const { resolve } = require('path');
const app = express()
const path = require('path')


const port = process.env.PORT || 50000 ; 

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'build')));

    
    app.get('*' , (req ,res) => {
        console.log("iam here in app.get")
        res.sendFile(path.join(__dirname, 'build', 'index.html'))
    
    })
}

app.listen(port , (err) => {

    if(err) return  console.log(err)
    console.log("server running on port " , port )

})