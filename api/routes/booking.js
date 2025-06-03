
const express = require("express");
const router = express.Router();
const Patient = require("../models/booking.js");
const adminMiddleWare = require("../middleware/adminMiddleWare.js");
const authMiddleWare = require("../middleware/authMiddleWare.js");
const patient = require("../models/booking.js");

// Add patient with booking ==> [user]
router.post("/add", authMiddleWare,async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      age,
      gender,
      consultationType,
      description
    } = req.body;

    const newPatient = new Patient({
      user: req.user.id,
      name,
      email,
      phone,
      age,
      gender,
      bookings: [
        {
          consultationType,
          description
        }
      ]
    });

    await newPatient.save();

    res.status(201).json({
      status: "success",
      message: "Patient and booking created successfully",
      data: newPatient
    });
  } catch (error) {
    console.error("Error in register:", error);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message
    });
  }
});

// get all patient ==> [admin]
router.get("/get-all", adminMiddleWare ,async (req, res) => {
  try {
    const allBooking = await Patient.find();
    res.status(201).json({
      status: "success",
      data: allBooking
    });

  } catch (error) {
    console.error("Error in register:", error);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message
    });
  }
});


router.get("/get-mybooks", authMiddleWare, async (req, res) => {
  try {
    const myBookings = await Patient.find({ user: req.user.id })
      .select("bookings status createdAt updatedAt __v");

    res.status(200).json({
      status: "success",
      data: myBookings.length > 0 ? myBookings : "لا يوجد حجوزات حاليا"
    });
  } catch (error) {
    console.error("Error in get-mybooks:", error);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message
    });
  }
});


// update ==> [admin]
router.post("/update-books/:id", adminMiddleWare, async (req, res) => {
  try {
    const {id} = req.params;
    const {status} = req.body;
    const updateStatuBook = await  Patient.findByIdAndUpdate(id, { status }, { new: true });
     res.status(200).json({
      status: "success",
      message: "status updated success",
      data: updateStatuBook
    });

  } catch (error) {
    console.error("Error in get-mybooks:", error);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message
    });
  }
})

// delete ==> [admin]
router.delete("/delete-book/:id", adminMiddleWare, async (req, res) => {
    try {

      await patient.findByIdAndDelete(req.params.id);
      res.status(200).json({
      status: "success",
      message: "data delted success",
    });

    }catch (error) {
    console.error("Error in get-mybooks:", error);
    res.status(500).json({
      status: "fail",
      message: "Something went wrong",
      error: error.message
    });
  }
})



module.exports = router;
