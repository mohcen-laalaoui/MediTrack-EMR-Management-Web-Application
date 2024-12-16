# EMR Web Application

This **Electronic Medical Record (EMR) Web Application** provides a comprehensive digital solution for managing patient records, appointments, and healthcare statistics. Designed to streamline the workflow of healthcare providers, it features a secure and user-friendly interface with robust data management capabilities.

## Features

- **Patient Management**
  - Securely create, view, edit, and delete patient records.
- **Appointment Scheduling**
  - Manage appointments with an intuitive calendar system.
- **Healthcare Statistics**
  - Generate and analyze statistics for better decision-making.
- **Role-Based Access Control (RBAC)**
  - Ensure secure access with user roles such as admin, doctor, and receptionist.
- **Responsive Design**
  - Optimized for desktop and mobile devices.

## Technologies Used

### Frontend
- **Framework**: [Angular](https://angular.io/) 
- **HTTP Requests**: [Axios](https://axios-http.com/)
- 
### Backend
- **Framework**: [Node.js](https://nodejs.org/)
- **HTTP Framework**: [Express.js](https://expressjs.com/)

### Database
- **Relational Database**: [MySQL](https://www.mysql.com/)
- **ORM**: Sequelize

## Installation

Follow these steps to set up the application on your local machine:

### Prerequisites
- [Node.js](https://nodejs.org/) installed
- [MySQL](https://www.mysql.com/) installed
- [Angular CLI](https://angular.io/cli) installed

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/mohcen-laalaoui/MediTrack-EMR-Management-Web-Application
   cd MediTrack-EMR-Management-Web-Application/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Configure the `.env` file with your MySQL database credentials:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=emr_database
   JWT_SECRET=your_jwt_secret
   ```
4. Run database migrations:
   ```bash
   npx sequelize-cli db:migrate
   ```
5. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the Angular development server:
   ```bash
   ng serve
   ```
4. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

### Patient Records
- `GET /api/patients` - Get all patient records
- `POST /api/patients` - Create a new patient record
- `PUT /api/patients/:id` - Update patient information
- `DELETE /api/patients/:id` - Delete a patient record

### Appointments
- `GET /api/appointments` - Get all appointments
- `POST /api/appointments` - Schedule a new appointment

## Folder Structure

```plaintext
emr-webapp/
├── backend/
│   ├── controllers/        # API Controllers
│   ├── models/             # Sequelize Models
│   ├── routes/             # API Routes
│   ├── migrations/         # Database Migrations
│   ├── config/             # Database Configuration
│   └── app.js              # Application Entry Point
├── frontend/
│   ├── src/
│       ├── app/            # Angular Components, Services, Modules
│       ├── assets/         # Static Files
│       ├── environments/   # Environment Configurations
│       └── main.ts         # Angular Entry Point
├── README.md
└── package.json
```

## Contact

For questions or support, please reach out:

- **Name**: Mohcen Laalaoui
- **Email**: mohcenlaa@gmail.com
- **GitHub**: https://github.com/mohcen-laalaoui

---

Thank you for checking out this project! Contributions, suggestions, and feedback are always welcome.
