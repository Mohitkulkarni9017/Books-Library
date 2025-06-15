// controllers/reviewController.js
const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  try {
    const bookId = req.params.id;
    const { comment, rating } = req.body;

    const existingReview = await Review.findOne({ book: bookId, user: req.user.userId });
    if (existingReview) {
      return res.status(400).json({ message: 'You have already reviewed this book' });
    }

    const review = new Review({
      book: bookId,
      user: req.user.userId,
      comment,
      rating
    });

    await review.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

exports.updateReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });

    if (!review.user || review.user.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not allowed' });
    }

    review.comment = req.body.comment || review.comment;
    review.rating = req.body.rating || review.rating;
    await review.save();

    res.json(review);
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};

exports.deleteReview = async (req, res) => {
  try {
    const review = await Review.findById(req.params.id);
    if (!review) return res.status(404).json({ message: 'Review not found' });

    if (!review.user || review.user.toString() !== req.user.userId) {
      return res.status(403).json({ message: 'Not allowed' });
    }

    await Review.deleteOne({ _id: req.params.id });
    res.json({ message: 'Review deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
};