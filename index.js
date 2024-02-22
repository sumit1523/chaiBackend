const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("twitter")
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})