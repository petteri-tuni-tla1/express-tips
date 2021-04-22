const express = require('express')
const app = express()
const port = 3000
var dt = require('./modules/totd.js')

// app.use('/public', express.static(path.join(__dirname, 'public')))
app.use('/public', express.static('public'))

app.get('/', (req, res) => {
	res.send('Hello Express! Use the /totd/<nr> to fetch tips')
})

app.get('/totd/:id', (req, res) => {
	// console.log(req)
	res.send(dt.readTip(req.params['id']) + "\n")	
})

// Populate data structures for delivering the tips files
dt.scanAllFiles();

/*
** These are for testing only at this point:
*/
app.get('/file/:name', (req, res) => {
	res.send(dt.readFile(req.params['name']) + "\n")		
})
app.get('/time', (req, res) => {
	res.send("Current date and time (according to node) is \n" + dt.myDateTime() + "\n")
})
app.get('/api/*', (req, res) => {
	res.send('Hello Express Any!'+req.path)
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})
