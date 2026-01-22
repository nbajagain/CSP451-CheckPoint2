/**
 * Authentication core logic
 * WHY: Keeps authentication rules isolated from routes and UI
 * so they can be reused and tested independently.
 */

// Demo in-memory users (no real database yet)
const users = [
  { id: 1, email: "user@example.com", password: "password123" },
  { id: 2, email: "admin@example.com", password: "admin123" },
];

/**
 * Validate login input
 * WHY: Fails early to avoid unnecessary processing
 */
function validateCredentials(email, password) {
  if (!email || !password) {
    return { ok: false, message: "Email and password are required" };
  }

  if (!email.includes("@")) {
    return { ok: false, message: "Invalid email format" };
  }

  if (password.length < 6) {
    return { ok: false, message: "Password must be at least 6 characters" };
  }

  return { ok: true };
}

/**
 * Authenticate user
 * WHY: Encapsulates authentication logic in one place
 */
function authenticateUser(email, password) {
  const validation = validateCredentials(email, password);
  if (!validation.ok) return validation;

  const foundUser = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!foundUser) {
    return { ok: false, message: "Invalid login credentials" };
  }

  return {
    ok: true,
    message: "Authentication successful",
    user: {
      id: foundUser.id,
      email: foundUser.email,
    },
  };
}

module.exports = {
  authenticateUser,
  validateCredentials,
};
