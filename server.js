const express = require('express');

var app = express();

app.get('/', (req, res) => {
	// res.send('<h1>Hello express!</h1>');
	res.send({
		name: 'Andrew',
		likes: [
          'Biking',
          'Cities'
		]
	})
});

app.get('/about', (req, res) => {
   res.send('About page');
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'error'
	});
});

app.listen(3000);