const User = require('../models/User');

/**
 * Creates a new user in the database.
 * @param {Object} userData - Object containing username, email, and passwordHash.
 * @returns {Promise<Object>} - The created user document.
 */
async function createUser(userData) {
  const user = new User(userData);
  return await user.save();
}

/**
 * Finds a user by email.
 * @param {String} email - User's email address.
 * @returns {Promise<Object|null>} - The user document or null if not found.
 */
async function findUserByEmail(email) {
  return await User.findOne({ email });
}

/**
 * Finds a user by ID.
 * @param {String} userId - User's MongoDB ObjectId.
 * @returns {Promise<Object|null>} - The user document or null if not found.
 */
async function findUserById(userId) {
  return await User.findById(userId);
}

/**
 * Updates user profile information.
 * @param {String} userId - User's MongoDB ObjectId.
 * @param {Object} updateData - Data to update (e.g., profile info).
 * @returns {Promise<Object|null>} - The updated user document or null if not found.
 */
async function updateUserProfile(userId, updateData) {
  return await User.findByIdAndUpdate(userId, { $set: updateData }, { new: true });
}

module.exports = {
  createUser,
  findUserByEmail,
  findUserById,
  updateUserProfile
};

// This service module encapsulates core user-related database operations,
// making it easier to reuse and test independently.