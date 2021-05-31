const express = require('express')
const SortNames = require('./SortNames')
const app = express()
const port = 8080

app.get('/', (req, res) => {
  res.send('Sorted Name list:  '+SortNames.exportarray)
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})