const express = require('express');
const { request } = require('http');
const { resolve } = require('path');
const app = express()
const path = require('path')


const port = process.env.PORT || 50000 ; 

if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, 'build')));

    
    +app.get('/*' , (req ,res) => {
    
        req.sendFile(path.join(__dirname, 'build', 'index.html'))
    })
    
}

app.listen(9000 , (err) => {

    if(err) return  console.log(err)
    console.log("server running on port " , 9000 )

})