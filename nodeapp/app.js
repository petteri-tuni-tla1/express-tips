const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
	res.send('Hello Express!')
})

app.get('/foo', (req, res) => {
	res.send('Hello Express Foo!')
})

app.get('*', (req, res) => {
	res.send('Hello Express Any!'+req.path)
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
