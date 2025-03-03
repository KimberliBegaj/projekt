
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    fullName: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true },
    reasonForVisit: { type: String, required: true },
    appointmentDate: { type: Date, required: true },
    appointmentTime: { type: String, required: true },
    medicalConditions: { type: String, required: true },
    additionalInformation: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Appointment', appointmentSchema);
