# Quora-page-using-API
# Quora Clone - REST API Based Web App

A Quora-like platform where users can ask questions, give answers, and engage in discussions. This project is built using REST APIs to support front-end and back-end separation.

---

## 🚀 Features

- 🔐 User Authentication (Signup, Login, JWT-based)
- ❓ Post Questions
- 💬 Post and Edit Answers
- 👍 Upvote/Downvote Answers
- 🔍 Search for Questions
- 🧵 Follow Questions or Users
- 📃 User Profiles & Activity History

---

## 📦 Tech Stack

- **Frontend**: (Not included in this repo) React / Vue / Angular (API driven)
- **Backend**: Node.js / Django / Flask (REST APIs)
- **Database**: MongoDB / PostgreSQL
- **Authentication**: JWT
- **API Testing**: Postman / Swagger

---

## 🔧 REST API Endpoints

### Auth

| Method | Endpoint        | Description       |
|--------|-----------------|-------------------|
| POST   | `/api/signup`   | Register user     |
| POST   | `/api/login`    | Login user        |
| GET    | `/api/logout`   | Logout user       |

### Questions

| Method | Endpoint             | Description               |
|--------|----------------------|---------------------------|
| POST   | `/api/questions`     | Create a new question     |
| GET    | `/api/questions`     | Get all questions         |
| GET    | `/api/questions/:id` | Get question by ID        |
| PUT    | `/api/questions/:id` | Update question           |
| DELETE | `/api/questions/:id` | Delete question           |

### Answers

| Method | Endpoint                   | Description             |
|--------|----------------------------|-------------------------|
| POST   | `/api/answers`             | Post a new answer       |
| GET    | `/api/answers/:questionId` | Get answers by question |
| PUT    | `/api/answers/:id`         | Edit an answer          |
| DELETE | `/api/answers/:id`         | Delete an answer        |

### Votes

| Method | Endpoint              | Description         |
|--------|-----------------------|---------------------|
| POST   | `/api/vote`           | Upvote/downvote     |

---

## ✅ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/quora-clone.git
cd quora-clone

