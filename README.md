# Books-Library
This is Books Library Project in Node.js with Express.


// README.md
# Book Review API

A RESTful API for managing users, books, and reviews built with Node.js, Express, and MongoDB.

## 🚀 Features
- User signup/login with JWT authentication
- Create, update, delete book reviews
- Search books by title or author
- Modular code structure with middleware

## 🛠️ Technologies
- Node.js
- Express.js
- MongoDB & Mongoose
- JWT Authentication

## 📁 Project Structure
```
project-root/
├── .env
├── server.js
├── app.js
├── config/
│   └── db.js
├── models/
├── controllers/
├── middleware/
├── routes/
└── README.md
```

## ⚙️ Setup Instructions
1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/book-review-api.git
   cd book-review-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create `.env` file:
   ```env
   MONGO_URI=mongodb://localhost:27017/bookreviewdb
   JWT_SECRET=your_jwt_secret
   ```
4. Start server:
   ```bash
   npm run dev
   ```

## 🔌 Example API Requests
### Signup
```bash
curl -X POST http://localhost:5000/api/auth/signup \
-H "Content-Type: application/json" \
-d '{"username": "john", "password": "123456"}'
```

### Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
-H "Content-Type: application/json" \
-d '{"username": "john", "password": "123456"}'
```

### Create Book
```bash
curl -X POST http://localhost:5000/api/books \
-H "Authorization: Bearer <token>" \
-H "Content-Type: application/json" \
-d '{"title": "Book Title", "author": "Author Name"}'
```

### Add Review
```bash
curl -X POST http://localhost:5000/api/books/<bookId>/reviews \
-H "Authorization: Bearer <token>" \
-H "Content-Type: application/json" \
-d '{"comment": "Great book!", "rating": 5}'
```

### Search Books
```bash
curl "http://localhost:5000/api/books/search?query=harry"
```

## 📘 Database Schema
### User
```js
{
  username: String,
  password: String (hashed)
}
```

### Book
```js
{
  title: String,
  author: String
}
```

### Review
```js
{
  book: ObjectId (ref: Book),
  user: ObjectId (ref: User),
  comment: String,
  rating: Number
}
```

## 📌 Notes
- Make sure MongoDB is running locally or use a cloud Mongo URI.
- Token must be passed via Authorization header as `Bearer <token>`.
