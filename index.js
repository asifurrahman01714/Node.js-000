const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    const product={
        "fruit": "apple",
        "price": "10",
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


app.listen(port, () => {
  console.log(`Example listening on port ${port}`)
})