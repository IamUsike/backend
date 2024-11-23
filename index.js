require('dotenv').config() //to set some sensitive info as env variable
const express = require('express')
// import express from "express" // can be done in either ways 

const app = express()
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Hello World!')
})

app.get('/nigga', (req, res) => {
    res.send("You are a nigga now")
})

app.get('/login', (req, res) => {
    res.send('<h1>Login karna mkc</h1>')
})

// app.listen(port, ()=>{
//     console.log(`App is listening on port ${port}`)
// })

app.listen(process.env.PORT, () => {
  console.log(`App is listening on port ${port}`);
});