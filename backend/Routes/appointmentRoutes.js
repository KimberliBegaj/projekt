// /backend/routes/appointmentRoutes.js
const express = require('express');
const router = express.Router();
const Appointment = require('../models/Appointment');
const app = express()
// Krijo një takim
app.post('/appointments', async (req, res) => {
    try {
        const newAppointment = new Appointment(req.body);
        await newAppointment.save();
        res.status(201).json(newAppointment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Merr të gjitha takimet
// router.get('/appointments', async (req, res) => {
//     try {
//         const appointments = await Appointment.find();
//         res.status(200).json(appointments);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// Merr një takim nga id
// router.get('/appointments/:id', async (req, res) => {
//     try {
//         const appointment = await Appointment.findById(req.params.id);
//         if (!appointment) {
//             return res.status(404).json({ message: 'Appointment not found' });
//         }
//         res.status(200).json(appointment);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// Përditëso një takim
// router.put('/appointments/:id', async (req, res) => {
//     try {
//         const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
//         if (!updatedAppointment) {
//             return res.status(404).json({ message: 'Appointment not found' });
//         }
//         res.status(200).json(updatedAppointment);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });

// Fshi një takim
// router.delete('/appointments/:id', async (req, res) => {
//     try {
//         const deletedAppointment = await Appointment.findByIdAndDelete(req.params.id);
//         if (!deletedAppointment) {
//             return res.status(404).json({ message: 'Appointment not found' });
//         }
//         res.status(200).json({ message: 'Appointment deleted' });
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });   

module.exports = app;
