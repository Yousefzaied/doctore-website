

const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  name: { type: String, required: true },
  email: { type: String },
  phone: { type: String, required: true },
  age: { type: Number },
  gender: {
    type: String,
    enum: ['male', 'female']
  },
  role: {
    type: String,
    default: 'patient'
  },
  bookings: [
    {
      consultationType: {
        type: String,
        enum: ['New Consultation', 'Follow-up', 'Emergency'],
        required: true 
      },
      description: { type: String }
    }
  ],
  status: {
    type: String,
    enum: ['pending', 'approved', 'rejected'],
    default: 'pending'
  }
}, { timestamps: true });

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
