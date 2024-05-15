 CREATE TABLE users (
    id INT PRIMARY KEY,
     first_name VARCHAR(15) NOT NULL,
     last_name VARCHAR(15) NOT NULL,
     date_of_birth DATE NOT NULL,
     address VARCHAR(255) NOT NULL,
     phone VARCHAR(12) NOT NULL,
     email VARCHAR(70) UNIQUE NOT NULL,
     password VARCHAR(12) NOT NULL,
     gender VARCHAR(10) NOT NULL CHECK (gender IN ('male', 'female', 'other')),
    type VARCHAR(10) NOT NULL CHECK (type IN ('patient', 'doctor')),
     blood_type VARCHAR(5),
     insurance_provider VARCHAR(25),
     medical_history TEXT,
     allergies TEXT,
     current_medications TEXT,
     previous_surgeries TEXT,
     chronic_diseases TEXT,
     emergency_contact_full_name VARCHAR(30),
     emergency_contact_relationship VARCHAR(10),
     emergency_contact_phone VARCHAR(12),
     medical_education VARCHAR(250),
     years_of_experience INT,
     medical_specialization VARCHAR(255),
    appointment_availability TEXT,
     practice_location VARCHAR(255)
 );
 

 CREATE TABLE Doctors (
     DoctorID INT PRIMARY KEY,
    FirstName VARCHAR(20) NOT NULL,
     LastName VARCHAR(20) NOT NULL,
     DateOfBirth DATE NOT NULL,
     Address VARCHAR(255) NOT NULL,
     PhoneNumber VARCHAR(13) NOT NULL,
     Email VARCHAR(70) NOT NULL,
     Password VARCHAR(13) NOT NULL,
     Gender VARCHAR(7) NOT NULL,
     MedicalEducation VARCHAR(255) NOT NULL,
     YearsOfExperience VARCHAR(50) NOT NULL,
     MedicalSpecialization VARCHAR(255) NOT NULL,
     AvailabilityForAppointments VARCHAR(100) NOT NULL,
     PracticeLocation VARCHAR(255) NOT NULL,
     EmergencyContactName VARCHAR(20) NOT NULL,
     EmergencyContactRelationship VARCHAR(10) NOT NULL,
     EmergencyContactPhoneNumber VARCHAR(13) NOT NULL
 );


 CREATE TABLE MedicalRecords (
     RecordID INT PRIMARY KEY,
     PatientID INT NOT NULL,
     DoctorID INT NOT NULL,
     DateOfVisit DATE NOT NULL,
     Symptoms TEXT NOT NULL,
     Diagnosis TEXT NOT NULL,
    MedicationsPrescribed TEXT NOT NULL,
    TreatmentPlan TEXT NOT NULL,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
     FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID)
);

CREATE TABLE appointments (
    PatientID INT,
    DoctorID INT,
    patientName VARCHAR(255),
    patientAge INT,
    patientPhone VARCHAR(255),
    doctorName VARCHAR(255),
    appointmentDate DATE,
    PRIMARY KEY (PatientID),
    FOREIGN KEY (DoctorID) REFERENCES doctors(DoctorID)
);



 CREATE TABLE Prescriptions (
     PrescriptionID INT PRIMARY KEY,
     PatientID INT NOT NULL,
     DoctorID INT NOT NULL,
     MedicalRecordID INT NOT NULL,
     Medication VARCHAR(255) NOT NULL,
     Dosage VARCHAR(100),
     Frequency VARCHAR(100),
    StartDate DATE,
     EndDate DATE,
     Instructions TEXT,
    FOREIGN KEY (PatientID) REFERENCES Patients(PatientID),
     FOREIGN KEY (DoctorID) REFERENCES Doctors(DoctorID),
    FOREIGN KEY (MedicalRecordID) REFERENCES MedicalRecords(RecordID)
 );

