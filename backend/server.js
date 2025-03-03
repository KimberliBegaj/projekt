
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const appointmentRoutes = require('./routes/appointmentRoutes');

//  .env
dotenv.config({path:'./backend.env'});

const app = express();
const port = process.env.PORT || 5500;


app.use(cors({
    origin:'http://localhost:3001',
    methods:['GET','POST','PUT','DELETE'],
    allowedHeaders:['Content-Type','Authorization'],
    credentials: true
})); 
app.use(express.json());  

app.options('*',cors());


app.use('/api', appointmentRoutes);

// Lidhja me MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('MongoDB Connected');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB', error);
    });


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
