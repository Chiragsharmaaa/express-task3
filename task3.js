const http = require('http');
const express = require('express');
// const bodyParser = require('body-parser')

const app = express(); 

app.use(express.urlencoded({ extended: true }))

app.use('/add-product',(req, res, next) => {
    res.send('<form action="/product" method="POST"><input placeholder="Input Name:"  type="text" name="title"><input placeholder="Enter Size:" type="text" name="size"><button type="submit">Add Product</button></form>')
})

app.use('/product', (req, res) => {
    console.log(req.body)
    res.redirect('/')
})

app.use('/',(req, res, next) => {
    res.send('<h1>Hello</h1>')
})




app.listen(3000);