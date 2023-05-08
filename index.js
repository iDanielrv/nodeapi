// config inicial
const express = require('express')
const mongoose = require('mongoose')
require('dotenv').config()
const app = express()


// forma de ler JSON / middlewares
app.use(
    express.urlencoded({
        extended: true,
    }),
)

app.use(express.json())

// Rotas da API
const personRoutes = require('./routes/personRoutes')

app.use('/person', personRoutes)

// rota inicial / endpoint
app.get('/', function(req, res) {

    // mostrar req

    res.json({ message: "Oi Express! "})

})

//entregar uma porta
const DB_USER = process.env.DB_USER
const DB_PASSWORD = encodeURIComponent(process.env.DB_PASSWORD)
mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.hrucfjf.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log("Conectamos ao MongoDB");
    app.listen(3000)
})
.catch((err) => {
    console.log(err);
})



//mongodb+srv://danielrv:tvyQOWsG31li3YXI@apicluster.pmclmmi.mongodb.net/bancodaapi?retryWrites=true&w=majority
//mongodb+srv://<username>:<password>@apicluster.pmclmmi.mongodb.net/?retryWrites=true&w=majority

//tvyQOWsG31li3YXI