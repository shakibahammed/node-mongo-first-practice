const express = require ('express');


const app =express();

app.get ( '/' , (req,res) => {
    res.send('Node is running...YAY')
} )

app.listen (4500, ()=> console.log('listening to port 4500'));
