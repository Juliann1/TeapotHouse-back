import express from 'express'
import homeRouter from './routes/home'

const app = express()
const PORT = process.env.PORT || '3030'
const cors = require('cors')


app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(homeRouter)

app.listen(PORT, () => {
    console.log(`Server online on ${PORT}`)
})



