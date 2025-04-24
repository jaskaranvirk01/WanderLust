const express = require("express");
const wrapAsync = require("../utils/wrapAsync.js");
const { validateReview, isLoggedIn, isReviewAuthor } = require("../middleware.js");
const reviewController = require("../controllers/reviews.js");

const router = express.Router({ mergeParams: true });


//POST ROUTE
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//REVIEW DELETE ROUTE
router.delete("/:reviewId", isLoggedIn, isReviewAuthor, wrapAsync(reviewController.destroyReview));


module.exports = router;