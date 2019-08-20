const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

// handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req,res) => {
    res.render('index', {
        title: 'Members App'
    })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server started...In port: ${PORT}`))