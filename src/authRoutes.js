/**
 * Auth routes module (Checkpoint 2)
 * WHY: Keeps auth-related request logic separate from other routes.
 */

const { loginUser } = require("./auth");

/**
 * Register auth routes.
 * WHY: Centralizes endpoints so app.js stays clean and readable.
 */
function registerAuthRoutes(app) {
  // Health check for auth module
  app.get("/auth/health", (req, res) => {
    res.json({ ok: true, module: "auth", timestamp: new Date().toISOString() });
  });

  // Login endpoint (stub/demo)
  app.post("/auth/login", (req, res) => {
    const email = req.body?.email || "";
    const password = req.body?.password || "";

    const result = loginUser(email, password);

    if (!result.ok) {
      return res.status(401).json(result);
    }

    return res.json(result);
  });
}

module.exports = { registerAuthRoutes };

