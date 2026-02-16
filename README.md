
# Employee Attendance System

The Employee Attendance System is a web-based application that allows employees to mark their daily attendance and enables managers to monitor and manage team attendance efficiently. The system provides secure authentication, attendance tracking, and dashboard features using a full-stack architecture.

This project is built using React for the frontend, Node.js and Express for the backend, and MongoDB as the database to store user and attendance data.

---

## 🚀 Tech Stack

### Frontend
- React.js
- Axios
- JavaScript (ES6+)
- HTML5
- CSS3

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcryptjs
- dotenv

### Database
- MongoDB

---

## 👥 User Roles

### 👤 Employee
- Register and Login
- View Dashboard
- Check In Attendance
- Check Out Attendance
- View Attendance History
- View Monthly Summary
- Logout

### 🧑‍💼 Manager
- Login
- View Manager Dashboard
- View All Employees Attendance
- Filter Attendance by Employee or Date
- View Team Attendance Summary
- Export Attendance Reports
- Logout

---

## 📂 Project Structure

```

attendance-system
│
├── backend
│   ├── server.js
│   ├── package.json
│   ├── .env
│   ├── models
│   │   ├── User.js
│   │   └── Attendance.js
│   ├── routes
│   │   ├── authRoutes.js
│   │   └── attendanceRoutes.js
│   └── middleware
│       └── authMiddleware.js
│
└── frontend
├── package.json
└── src
├── App.js
├── Login.js
├── Dashboard.js
└── Attendance.js

```

---

## ⚙️ Installation and Setup

### Step 1: Clone the repository

```

git clone [https://github.com/your-username/attendance-system.git](https://github.com/your-username/attendance-system.git)

```
```

cd attendance-system

```

---

## 🔧 Backend Setup

### Navigate to backend folder

```

cd backend

```

### Install dependencies

```

npm install

```

### Create .env file

Create a file named `.env` and add:

```

MONGO_URI=mongodb://127.0.0.1:27017/attendance
JWT_SECRET=secret123

```

### Start backend server

```

node server.js

```

Backend runs on:

```

[http://localhost:5000](http://localhost:5000)

```

---

## 💻 Frontend Setup

Open new terminal and navigate to frontend folder:

```

cd frontend

```

### Install dependencies

```

npm install

```

### Start frontend

```

npm start

```

Frontend runs on:

```

[http://localhost:3000](http://localhost:3000)

```

---

## 🔗 API Endpoints

### Auth

- POST /api/auth/register → Register user
- POST /api/auth/login → Login user

### Attendance

- POST /api/attendance/checkin → Check in attendance
- POST /api/attendance/checkout → Check out attendance
- GET /api/attendance/my-history → View attendance history

---

## 🗄️ Database

Database Name:
```

attendance

```

Collections:
```

users
attendance

```

---

## 📊 Features

- Secure login using JWT authentication
- Attendance check-in and check-out system
- Dashboard for employees and managers
- Attendance stored in MongoDB database
- RESTful API integration
- Full-stack application using React and Node.js

---

## ▶️ Output

- Login page displayed successfully
- Dashboard loaded correctly
- Attendance check-in working
- Attendance check-out working
- Data stored in MongoDB
- Frontend and backend connected successfully

---

## 📌 Future Improvements

- Add calendar view
- Add attendance charts
- Add manager report export
- Deploy using cloud services
```

---



---

If you want, I can also give a **GitHub description, tags, and preview text** to make your project stand out professionally.
