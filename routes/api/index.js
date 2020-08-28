const router = require('express').Router();
// this file will serve as a means to collect all of the API routes and package them up

const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');

// route for userRoutes
router.use('/users', userRoutes);

// route for postRoutes
router.use('/posts', postRoutes);

// route for commentRoutes
router.use('/comments', commentRoutes);



module.exports = router;