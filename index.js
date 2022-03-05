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

app.listen(port, () => {
  console.log(`Example listening on port ${port}`)
})