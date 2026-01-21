const express = require("express");
const router = express.Router();

/**
 * Starter endpoint to prove the API works.
 * WHY: Used as a health check to confirm the server is running
 */
router.get("/health", (req, res) => {
  res.json({
    status: "ok",
    time: new Date().toISOString(),
  });
});

/**
 * GET /users
 * WHY: Returns a demo list of users
 * This proves routing works without needing a database
 */
router.get("/users", (req, res) => {
  res.json({
    ok: true,
    data: [
      { id: 1, name: "Demo User One" },
      { id: 2, name: "Demo User Two" },
      { id: 3, name: "Demo User Three" },
    ],
  });
});

/**
 * POST /users
 * WHY: Simulates user creation
 * This endpoint exists to demonstrate POST handling
 */
router.post("/users", (req, res) => {
  const name = req.body?.name || "Unnamed User";

  res.status(201).json({
    ok: true,
    message: "User created successfully (stub)",
    user: {
      id: Date.now(),
      name,
    },
  });
});

/**
 * WHY this file exists:
 * - Keeps API routes separate from app.js
 * - Improves maintainability
 * - Makes future expansion easier
 */
module.exports = { router };

