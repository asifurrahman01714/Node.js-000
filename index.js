const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');
const bodyParser = require('body-parser')

app.use(cors());
app.use(bodyParser.json())

app.get('/', (req, res) => {
    const product={
        fruit: "apple", //data can be send to server as real object also"
        price: "10",
    }
  res.send(product);
})

// creating another API
app.get('/api/v1/products', (req, res) => {
    const products = [
        {
            "id": 1,
            "name": "product 1",
            "price": "10",
        },
        {
            "id": 2,
            "name": "product 2",
            "price": "20",
        },
    ]
    res.send(products);
});

// set dynamic users
const allUsers = ["John", "Jane", "Jack"];

app.get('/users/:id',(req, res) => {
    const user = {
        id: req.params.id, // get the id from the url from request..Because user will send everything as request. and server will send it as response
        name: `${allUsers[req.params.id]}`,
    }
    res.send(user);
})

app.post('/addUsers', (req, res) => {
    console.log("post request sent")
    console.log(req.body)
    const user = req.body;
    user.id=23;
    res.send(user)
})
app.listen(port, () => {
  console.log(`Example listening on port ${port}`)
})