const express = require('express')
const app = express()
const methodOverride = require('method-override')

const { typeRouter } = require('./controllers/type.js')
const { carRouter } = require('./controllers/car.js')
const { eventRouter } = require('./controllers/event.js')


app.use(express.urlencoded({extended: true}))

app.use(express.json())

app.use(methodOverride('_method'))

app.use(express.static(__dirname+"/public"))

app.set('view engine', 'hbs')

app.use('/', typeRouter)
app.use('/', carRouter)
app.use('/', eventRouter)

const PORT = process.env.PORT || 3000 

app.listen(PORT, () => {
    console.log(`App is listening on PORT ${PORT}`)
})