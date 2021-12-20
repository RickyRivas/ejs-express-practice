const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 5000;

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))

// set templating engine
app.use(expressLayouts);
// set default layout.ejs to new file
app.set('layout', './layouts/full-width.ejs')
app.set('view engine', 'ejs')

// navigation / router
app.get('', (req, res) => {
    res.render('index', {title: 'Home Page'})
})
app.get('/about', (req, res) => {
    // change layout
    res.render('about', {
        layout: './layouts/sidebar',
        title: 'About Us'
    })
})

// listen 
app.listen(port, () => console.info(`app listening on port ${port}`))