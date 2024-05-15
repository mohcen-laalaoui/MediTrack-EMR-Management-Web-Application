const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "mohcen_seif",
  password: "mohcen",
  database: "medical",
});

const app = express();
app.use(cors());

app.use(bodyParser.json());

// Login
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }

  const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
  const values = [email, password];

  pool.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error executing query:", err.message);
      return res.status(500).json({ error: "Internal server error" });
    }

    if (result.length === 0) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    const user = result[0];
    console.log("Login successful");
    res.json({ message: "Login successful", user });
  });
});

//signup patient
app.post("/signup-patient", (req, res) => {
  const signupData = req.body;
  console.log(req.body);
  const userSql = `INSERT INTO users (
    first_name, 
    last_name, 
    date_of_birth, 
    address, 
    phone, 
    email, 
    password, 
    gender, 
    blood_type, 
    insurance_provider, 
    medical_history, 
    allergies, 
    current_medications, 
    previous_surgeries, 
    chronic_diseases, 
    emergency_contact_full_name, 
    emergency_contact_relationship, 
    emergency_contact_phone
) 
VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)
`;

  const userParams = [
    signupData.firstname,
    signupData.lastname,
    signupData.dob,
    signupData.address,
    signupData.phone,
    signupData.email,
    signupData.password,
    signupData.Gender,
    signupData.blood,
    signupData.insurance_provider,
    signupData.medical_history,
    signupData.allergies,
    signupData.currentMedications,
    signupData.surgeries,
    signupData.diseases !== undefined && signupData.diseases !== ""
      ? signupData.diseases
      : null,
    signupData.fullname,
    signupData.relationship,
    signupData.phonenumber,
  ];

  const patientSql = `INSERT INTO patients ( 
    FirstName, 
    LastName, 
    DateOfBirth, 
    Address, 
    PhoneNumber, 
    Email, 
    Password, 
    Gender, 
    BloodType, 
    InsuranceProvider, 
    MedicalHistory, 
    Allergies, 
    CurrentMedications, 
    PreviousSurgeries, 
    ChronicDiseases, 
    EmergencyContactName, 
    EmergencyContactRelationship, 
    EmergencyContactPhoneNumber
) 
VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

  const patientParams = [
    signupData.firstname,
    signupData.lastname,
    signupData.dob,
    signupData.address,
    signupData.phone,
    signupData.email,
    signupData.password,
    signupData.Gender,
    signupData.blood,
    signupData.insurance_provider,
    signupData.medical_history,
    signupData.allergies,
    signupData.currentMedications,
    signupData.surgeries,
    signupData.diseases !== undefined && signupData.diseases !== ""
      ? signupData.diseases
      : null,
    signupData.fullname,
    signupData.relationship,
    signupData.phonenumber,
  ];

  pool.query(userSql, userParams, (err, results) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    console.log("Signup successful");
    res.status(201).json({ message: "Signup successful" });
  });

  pool.query(patientSql, patientParams, (err, results) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    console.log("Signup successful");
    res.status(201).json({ message: "Signup successful" });
  });
});

//signup doctor
app.post("/signup-doctor", (req, res) => {
  const signupData = req.body;
  console.log(req.body);
  const sql = `INSERT INTO users (
    first_name, 
    last_name, 
    date_of_birth, 
    address, 
    phone, 
    email, 
    password, 
    gender, 
    medical_education,
    years_of_experience,
    medical_specialization,
    appointment_availability,
    practice_location,
    emergency_contact_full_name, 
    emergency_contact_relationship, 
    emergency_contact_phone
) 
VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`;

  const params = [
    signupData.firstname,
    signupData.lastname,
    signupData.dob,
    signupData.address,
    signupData.phone,
    signupData.email,
    signupData.password,
    signupData.Gender,
    signupData.medical_education,
    signupData.years_of_experience !== undefined
      ? signupData.years_of_experience
      : null,
    signupData.medical_specialization,
    signupData.appoitement,
    signupData.practice_located,
    signupData.fullname,
    signupData.relationship,
    signupData.phonenumber,
  ];

  pool.query(sql, params, (err, results) => {
    if (err) {
      console.error("Error executing SQL query:", err);
      res.status(500).json({ error: "Internal server error" });
      return;
    }
    console.log("Signup successful");
    res.status(201).json({ message: "Signup successful" });
  });
});

//appointments
app.post("/appointment", (req, res) => {
  const appointment = req.body;
  console.log("Received appointment details:", appointment);

  const phone = appointment.phone ? appointment.phone : null;

  const appointmentDate = appointment.date
    ? new Date(appointment.date).toISOString().split("T")[0]
    : null;

  const sql = `INSERT INTO appointments (patientName, patientAge, patientPhone, doctorName, appointmentDate) VALUES (?, ?, ?, ?, ?)`;

  const values = [
    appointment.name,
    appointment.age,
    phone,
    appointment.doctor,
    appointmentDate,
  ];

  pool.query(sql, values, (err, result) => {
    if (err) {
      console.error("Error inserting appointment into database:", err);
      res
        .status(500)
        .json({ error: "Error inserting appointment into database" });
      return;
    }
    console.log("Appointment inserted successfully");
    res.json({ message: "Appointment received and inserted successfully" });
  });
});

// GET endpoint for fetching appointments
app.get("/appointments", (req, res) => {
  const sql = "SELECT * FROM appointments";

  pool.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching appointments:", err);
      res.status(500).json({ error: "Error fetching appointments" });
      return;
    }

    res.json(results);
    console.log("Data display on dashboard");
  });
});

// Route to add a new patient
app.post("/patients", (req, res) => {
  const newPatient = req.body;
  const sql = "INSERT INTO patients SET ?";
  connection.query(sql, newPatient, (err, result) => {
    if (err) {
      console.error("Error adding patient:", err);
      res.status(500).send("Error adding patient");
      return;
    }
    newPatient.id = result.insertId;
    res.json(newPatient);
  });
});

// Route to fetch all patients
app.get("/patients", (req, res) => {
  const sql =
    "SELECT PatientID,LastName,PhoneNumber,Gender,BloodType,MedicalHistory,CurrentMedications,PreviousSurgeries,ChronicDiseases FROM patients";
  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Error fetching patients:", err);
      res.status(500).send("Error fetching patients");
      return;
    }
    res.json(results);
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
