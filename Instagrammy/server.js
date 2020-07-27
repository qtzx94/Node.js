const express = require('express')
const configure = require('./server/configure')

app = express()
app = configure(app)
app.set('port', process.env.PORT || 3000)

// app.get('/', (req, res) => {
//   res.send('hello world')
// })

app.listen(app.get('port'), () => {
  console.log(`Server is running on http://localhost:${app.get('port')}`)
})
