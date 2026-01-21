/**
 * Database connection module (stub)
 * WHY: Gives the app a consistent DB interface now,
 * so we can swap in a real DB later without rewriting routes.
 */

let connected = false;
let lastAction = "never";
let connectionInfo = {
  driver: "stub",
  url: "",
  dbName: "",
};

/**
 * Connect to database (stub)
 * WHY: Simulates successful connection for local development.
 */
function connectDatabase({ url = "", dbName = "" } = {}) {
  if (connected) {
    lastAction = "connect:already_connected";
    return { ok: true, message: "Already connected (stub)" };
  }

  connected = true;
  lastAction = "connect:success";
  connectionInfo = {
    driver: "stub",
    url,
    dbName,
  };

  return { ok: true, message: "Connected to database (stub)", connectionInfo };
}

/**
 * Disconnect database (stub)
 * WHY: Allows clean shutdown and resets state.
 */
function disconnectDatabase() {
  if (!connected) {
    lastAction = "disconnect:not_connected";
    return { ok: false, message: "Not connected (stub)" };
  }

  connected = false;
  lastAction = "disconnect:success";
  return { ok: true, message: "Disconnected (stub)" };
}

/**
 * Get DB status
 * WHY: Useful for debugging, health checks, and logs.
 */
function getDatabaseStatus() {
  return {
    connected,
    lastAction,
    connectionInfo,
    timestamp: new Date().toISOString(),
  };
}

module.exports = { connectDatabase, disconnectDatabase, getDatabaseStatus };
