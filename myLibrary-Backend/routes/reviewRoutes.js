const express = require('express');
const router = express.Router();
const { authMiddleware } = require('../middleware/auth');

const {
  updateReview,
  deleteReview
} = require('../controllers/reviewController');

router.put('/:id', authMiddleware, updateReview);
router.delete('/:id', authMiddleware, deleteReview);

module.exports = router;
