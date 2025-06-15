// Corrected bookRoutes.js
const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth'); 
const {
  createBook,
  getBooks,
  getBookById,
  searchBooks,
  addReview
} = require('../controllers/bookController');

router.post('/', authMiddleware, createBook);
router.get('/', getBooks);
router.get('/search', searchBooks);
router.get('/:id', getBookById);
router.post('/:id/reviews', authMiddleware, addReview);

module.exports = router;
