const express = require('express')
const cors = require('cors')
const path = require('path')

const app = express();
app.use(express.json())
app.use(cors())

//For sending files
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "../Pages/main.html"))
})
app.get('/css', (req,res)=>{
    res.sendFile(path.join(__dirname, '../Style/style.css'))
})
app.get('/js', (req,res)=>{
    res.sendFile(path.join(__dirname, '../Pages/main.js'))
})


//app.uses
app.use('/', express.static(path.join(__dirname, "../Pages/main.html")))
app.use('/css', express.static(path.join(__dirname, "../Style/style.css")))
app.use('/js', express.static(path.join(__dirname, "../Pages/main.js")))


//Axios commands




const PORT = process.env.PORT|| 4000
app.listen(PORT, ()=>{
    console.log(`Running on port ${PORT}`)
})