/**
 * Handles errors in Express routes.
 * @param {Error} err - The error object.
 * @param {Request} req - Express request object.
 * @param {Response} res - Express response object.
 * @param {Function} next - Next middleware function.
 */
function errorHandler(err, req, res, next) {
  console.error(err); // Log error details

  // Customize response based on error type or properties
  if (err.name === 'ValidationError') {
    // Mongoose validation error
    return res.status(400).json({ error: err.message });
  } else if (err.name === 'CastError') {
    // Invalid ObjectId or cast error
    return res.status(400).json({ error: 'Invalid request data' });
  } else if (err.statusCode) {
    // Custom error with statusCode
    return res.status(err.statusCode).json({ error: err.message });
  } else {
    // Default to 500 Internal Server Error
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = errorHandler;

// Usage: import and use as Express error-handling middleware at the end of your middleware stack.
4.30 seconds