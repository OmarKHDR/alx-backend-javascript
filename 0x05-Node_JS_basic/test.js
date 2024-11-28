const express = require('express')

app = express()

port = 3030

app.get('/sayHello', (req, res)=>{
	res.send(`hello world from ${req.headers['user-agent']}`)
})


app.listen(port, ()=>{
	console.log("beginning connection")
})