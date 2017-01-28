const express = require('express');
const hbs = require('hbs');


var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));


app.get('/', (req, res) => {
	// res.send('<h1>Hello express!</h1>');
	res.render('home.hbs', {
        pageTitle: 'Home page',
        WelcomeMessage: 'Welcome home!',
        currentYear: new Date().getFullYear()
	});
});

app.get('/about', (req, res) => {
   res.render('about.hbs', {
   	pageTitle: 'About Page',
   	currentYear: new Date().getFullYear()
   });
});

app.get('/bad', (req, res) => {
	res.send({
		errorMessage: 'error'
	});
});

app.listen(3000, ()=> {
	console.log('Server is up on port 3000');
});