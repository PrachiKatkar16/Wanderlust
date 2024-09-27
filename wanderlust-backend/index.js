const express=require('express')
const cors=require('cors')
const connection=require('./config/db')
const userRoutes=require('./routes/user.route')
const imageRoutes = require('./routes/image.route');
const tripRoutes = require('./routes/trip.route')
require('dotenv').config()
const PORT=process.env.PORT || 5000
const app=express();
app.use(express.json())
app.use(cors({
    origin: 'http://localhost:5173', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // If you need to send cookies
  }));
app.get('/',(req,res)=>{
    res.send("server is working fine")
})
app.use('/auth', userRoutes);
app.use('/images', imageRoutes);
app.use('/trips', tripRoutes);

app.listen(PORT,async()=>{
    try {
        await connection;
        console.log(`Server is running on port ${PORT} and connected to db`)
    } catch (error) {
        console.log(`Error while connecting to db ${error}`)
    }
})
