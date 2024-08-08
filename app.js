const express = require('express')
const port = 5050
const app = express()
const connectDB = require('./config/db')
connectDB()

const userRoute = require('./routes/useRoutes')



app.get('/api', (req, res) => {
    res.json({message:'my server'})
})



app.use(express.json())


app.use('/api', userRoute)




app.listen(port, () => {
    console.log('server started successfully');
    
})