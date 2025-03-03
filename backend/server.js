
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const appointmentRoutes = require("./Routes/appointmentRoutes");

//  .env
dotenv.config({path:'./backend.env'});

const app = express();
const port = process.env.PORT || 5500;


// app.use(cors(
//     {
//     credentials: true,
//     origin: "http://localhost:3000",
//     exposedHeaders: ["set-cookie"],
//     }))
// const cors = require('cors');
const corsOptions ={
    origin:'http://localhost:3000', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(express.json());  

// app.options('*',cors());


app.use(appointmentRoutes);

// Lidhja me MongoDB
// mongoose.connect(process.env.MONGO_URI)
//     .then(() => {
//         console.log('MongoDB Connected');
//     })
//     .catch((error) => {
//         console.error('Error connecting to MongoDB', error);
//     });

mongoose.connect('mongodb+srv://kimkimberli:123@cluster0.qqf7y.mongodb.net/dentalDB?retryWrites=true&w=majority&appName=Cluster0')
        .then(() =>console.log("DB connected"))
        .catch((err) => console.log("Something is wrong", err))
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
